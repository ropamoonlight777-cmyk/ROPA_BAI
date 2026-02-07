document.addEventListener('DOMContentLoaded', function() {

    // --- 动态打字机效果 ---
    const typewriterElement = document.querySelector('.typewriter');
    const words = ["International Journalism", "Brand Strategy", "Digital Storytelling", "Creative Direction"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        const fullWord = words[wordIndex];
        
        if (isDeleting) {
            currentWord = fullWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentWord = fullWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typewriterElement.textContent = currentWord;

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && currentWord === fullWord) {
            typeSpeed = 2000; // 单词显示后的停留时间
            isDeleting = true;
        } else if (isDeleting && currentWord === '') {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // 切换单词的间隔
        }

        setTimeout(type, typeSpeed);
    }

    type();


    // --- 作品集筛选功能 ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的 active 类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前点击的按钮添加 active 类
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                item.style.display = 'none'; // 先隐藏所有项
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block'; // 显示匹配的项
                }
            });
        });
    });

});
