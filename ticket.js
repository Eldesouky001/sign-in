document.querySelectorAll('input').forEach(input => {
            if (input.type !== 'search') {
                input.addEventListener('change', calculateTotal);
            }
        });

        function calculateTotal() {
            const prices = {
                'local-adult': 50,
                'local-child': 25,
                'foreign-adult': 200,
                'foreign-child': 100
            };
            
            let total = 0;
            for (const id in prices) {
                total += (document.getElementById(id).value || 0) * prices[id];
            }
            document.getElementById('totalAmount').textContent = total;
        }

        function bookTickets() {
            const date = document.getElementById('visitDate').value;
            const total = document.getElementById('totalAmount').textContent;
            
            if (!date) {
                alert('Please select a date');
                return;
            }
            if (total == 0) {
                alert('Please select at least one ticket');
                return;
            }
            
            document.getElementById('thankYou').style.display = 'block';
            
            setTimeout(() => {
                document.getElementById('thankYou').style.display = 'none';
                document.querySelectorAll('input[type="number"]').forEach(input => {
                    input.value = 0;
                });
                document.getElementById('totalAmount').textContent = '0';
                document.getElementById('visitDate').value = '';
            }, 3000);
        }

        window.onload = function() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('visitDate').min = today;
        };