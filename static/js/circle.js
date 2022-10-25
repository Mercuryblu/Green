const circle = document.querySelector(".circle");

        document.addEventListener("mousemove", (e) => {
            var position = $(window).scrollTop();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            circle.style.left = mouseX + 'px';
            circle.style.top = position+mouseY + 'px';
        });