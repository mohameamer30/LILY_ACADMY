document.getElementById('signupBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const childName = document.getElementById('childName').value;
    const guardianName = document.getElementById('guardianName').value;
    const childAge = document.getElementById('childAge').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // تحقق من أن جميع الحقول مليئة وكلمة المرور تطابق
    if (username && childName && guardianName && childAge && phone && password && confirmPassword) {
        if (password === confirmPassword) {
            // حفظ بيانات الحساب في localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // عرض رسالة نجاح
            document.getElementById('signupMessage').innerText = 'تم إنشاء الحساب بنجاح!';

            // إعادة التوجيه إلى صفحة تسجيل الدخول بعد فترة قصيرة
            setTimeout(function() {
                window.location.href = 'file:///E:/MOHAMED/New%20folder%20(3)/login.html';
            }, 2000); // الانتظار لمدة 2000 مللي ثانية (2 ثانية)
        } else {
            document.getElementById('signupMessage').innerText = 'كلمة المرور وتأكيد كلمة المرور لا تتطابق.';
        }
    } else {
        document.getElementById('signupMessage').innerText = 'يرجى ملء جميع الحقول.';
    }
});
