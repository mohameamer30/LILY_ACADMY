const users = []; // مصفوفة لتخزين المستخدمين

// وظيفة لإضافة مستخدم جديد (يمكنك تعديل هذا ليتناسب مع نظامك)
function addUser(childName, guardianName, childAge, phone) {
    users.push({ childName, guardianName, childAge, phone });
}

document.getElementById('loginAdminBtn').addEventListener('click', function() {
    const password = document.getElementById('adminPassword').value;
    const message = document.getElementById('adminMessage');

    if (password === '654321') {
        message.textContent = 'تم تسجيل الدخول بنجاح!';
        message.style.color = 'green';
        document.getElementById('userTableContainer').style.display = 'block';
        loadUsers();
    } else {
        message.textContent = 'كلمة المرور غير صحيحة.';
        message.style.color = 'red';
    }
});

// وظيفة لتحميل المستخدمين في الجدول
function loadUsers() {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = ''; // مسح الجدول الحالي

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.childName}</td>
            <td>${user.guardianName}</td>
            <td>${user.childAge}</td>
            <td>${user.phone}</td>
        `;
        tbody.appendChild(row);
    });
}

// يمكنك هنا استدعاء addUser لإضافة مستخدمين (تأكد من فعل ذلك عندما تقوم بإنشاء حسابات جديدة)
// وظيفة لتحميل المستخدمين في الجدول
function loadUsers() {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = ''; // مسح الجدول الحالي

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.childName}</td>
            <td>${user.guardianName}</td>
            <td>${user.childAge}</td>
            <td>${user.phone}</td>
            <td><button onclick="changePassword(${index})">تغيير كلمة المرور</button></td>
            <td><button onclick="deleteUser(${index})">🗑️</button></td>
        `;
        tbody.appendChild(row);
    });
}

// وظيفة لتغيير كلمة المرور
function changePassword(index) {
    const newPassword = prompt("أدخل كلمة المرور الجديدة:");
    if (newPassword) {
        users[index].password = newPassword; // افترض أن المستخدمين لديهم خاصية كلمة المرور
        alert("تم تغيير كلمة المرور بنجاح.");
    }
}

// وظيفة لحذف المستخدم
function deleteUser(index) {
    if (confirm("هل أنت متأكد أنك تريد حذف هذا المستخدم؟")) {
        users.splice(index, 1); // حذف المستخدم من المصفوفة
        loadUsers(); // إعادة تحميل المستخدمين لتحديث العرض
        alert("تم حذف المستخدم بنجاح.");
    }
}
