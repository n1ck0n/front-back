const studentPhoto = document.getElementById('studentPhoto');

        studentPhoto.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)'; 
        });

        studentPhoto.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; 
        });

        studentPhoto.addEventListener('click', function() {
            this.src = 'favorite_teacher_photo.jpg'; 
        });

        studentPhoto.addEventListener('dblclick', function() {
            alert('Не налегай, у меня не так много любимых преподавателей');
        });