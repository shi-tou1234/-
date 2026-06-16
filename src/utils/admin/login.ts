import {
  setMsg,
  unlockPanel,
  getToken,
  saveGitHubDraft,
  verifyPassword,
  loadSecurityConfig,
} from "./core";

export function initLoginHandlers(loadPostList: () => Promise<void>) {
  const loginMsg = document.getElementById("login-msg");

  if (sessionStorage.getItem("cmchen_admin_ok") === "1") {
    unlockPanel();
  }

  loadSecurityConfig();

  document.getElementById("login-btn")?.addEventListener("click", async () => {
    const pwd = document.getElementById("admin-password")?.value || "";
    const passed = await verifyPassword(pwd);
    if (passed) {
      setMsg(loginMsg, "登录成功");
      unlockPanel();
      loadPostList().catch((error) => {
        setMsg(document.getElementById("post-msg"), String(error), true);
      });
    } else {
      setMsg(loginMsg, "密码错误", true);
    }
  });

  document.getElementById("change-password-btn")?.addEventListener("click", async () => {
    const msgEl = document.getElementById("pwd-msg");
    const oldPwd = document.getElementById("old-password")?.value || "";
    const newPwd = document.getElementById("new-password")?.value || "";
    const token = getToken();
    const branch = (document.getElementById("gh-branch")?.value || "main").trim();

    if (!token) {
      setMsg(msgEl, "请先填写 GitHub Token", true);
      return;
    }

    const { adminService } = await import("./core");
    await adminService.changePassword({
      oldPassword: oldPwd,
      newPassword: newPwd,
      token,
      branch
    });

    setMsg(msgEl, "密码修改成功，已全站生效（跨设备统一）");
    const oldInput = document.getElementById("old-password");
    const newInput = document.getElementById("new-password");
    if (oldInput) oldInput.value = "";
    if (newInput) newInput.value = "";
  });
}
