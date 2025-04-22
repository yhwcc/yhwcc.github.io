document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 0;
    const totalPages = 6;
    const container = document.querySelector('.pages-container');
    
    document.querySelectorAll('.note-area').forEach(textarea => {
        textarea.addEventListener('input', handleInput);
    });

    document.querySelector('.prev-btn').addEventListener('click', prevPage);
    document.querySelector('.next-btn').addEventListener('click', nextPage);

    function handleInput(e) {
        const wordCount = countWords(e.target.value);
        const maxWords = 250;
        const counter = e.target.parentElement.querySelector('.word-counter');
        counter.textContent = `Words: ${wordCount}/${maxWords}`;
        counter.style.color = wordCount > maxWords ? '#ff4444' : '#ff85a2';
        if(wordCount > maxWords) e.target.value = truncateWords(e.target.value, maxWords);
    }

    function countWords(text) {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    function truncateWords(text, maxWords) {
        return text.trim().split(/\s+/).slice(0, maxWords).join(' ');
    }

    function updateButtons() {
        document.querySelector('.prev-btn').style.display = currentPage > 0 ? 'block' : 'none';
        document.querySelector('.next-btn').style.display = currentPage < totalPages - 1 ? 'block' : 'none';
    }

    function nextPage() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            container.style.transform = `translateX(-${currentPage * 700}px)`;
            updateButtons();
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            container.style.transform = `translateX(-${currentPage * 700}px)`;
            updateButtons();
        }
    }

    updateButtons();
});
