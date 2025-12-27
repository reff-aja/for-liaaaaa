 
        function createHearts() {
            const heartsCount = 15;
            for (let i = 0; i < heartsCount; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.opacity = Math.random();
                document.body.appendChild(heart);
            }
        }
        createHearts();