import { Accounts } from 'meteor/accounts-base';

AccountsTemplates.configure({
  texts: {
    title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Forgot Pwd Title",
        resetPwd: "Reset Pwd Title",
        signIn: "Нэвтрэх",
        signUp: "Бүртгүүлэх",
        verifyEmail: "Verify Email Title",
    },
    button: {
        changePwd: "Password солих",
        enrollAccount: "Enroll Text",
        forgotPwd: "Нууц үг матрсан?",
        resetPwd: "Reset Pwd Text",
        signIn: "Нэвтрэх",
        signUp: "Бүртгүүлэх",
    }
  }
})
