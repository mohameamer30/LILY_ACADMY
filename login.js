document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // استرجاع بيانات الاعتماد من localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // تحقق من صحة بيانات الاعتماد
    if (username === storedUsername && password === storedPassword) {
        // إعادة توجيه المستخدم إلى الصفحة المطلوبة
        window.location.href = 'file:///E:/MOHAMED/New%20folder%20(3)/index.html';
    } else {
        document.getElementById('loginMessage').innerText = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
    }
});
