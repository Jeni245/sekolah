// Animasi interaktif pada tombol
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.2s ease';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Efek pop-up sederhana saat tombol diklik
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const modal = document.createElement('div');
                modal.innerHTML = `
                    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div class="bg-white p-8 rounded-lg text-center">
                            <h2 class="text-2xl mb-4">Terima Kasih!</h2>
                            <p>Pesanan Anda sedang diproses.</p>
                            <button class="close-modal mt-4 bg-pink-500 text-white px-4 py-2 rounded">Tutup</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);

                const closeButton = modal.querySelector('.close-modal');
                closeButton.addEventListener('click', () => {
                    document.body.removeChild(modal);
                });
            });
        });