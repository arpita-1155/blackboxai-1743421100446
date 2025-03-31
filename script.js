// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabType = this.getAttribute('data-tab');
            document.getElementById(`signup${tabType.charAt(0).toUpperCase() + tabType.slice(1)}Form`).classList.add('active');
        });
    });

    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // TODO: Implement actual authentication
        console.log('Login attempt:', username, password);
        alert('Login functionality will be implemented next');
    });

    document.getElementById('signupShopForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const shopData = {
            name: document.getElementById('shopName').value,
            location: document.getElementById('shopLocation').value,
            contact: document.getElementById('shopContact').value,
            password: document.getElementById('shopPassword').value,
            wasteTypes: Array.from(document.querySelectorAll('#signupShopForm input[type="checkbox"]:checked')).map(cb => cb.value)
        };
        // TODO: Save to data.json
        console.log('Shop registration:', shopData);
        alert('Shop registration will be saved to database');
    });

    document.getElementById('signupIndustryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const industryData = {
            name: document.getElementById('industryName').value,
            location: document.getElementById('industryLocation').value,
            contact: document.getElementById('industryContact').value,
            password: document.getElementById('industryPassword').value,
            wasteTypes: Array.from(document.querySelectorAll('#signupIndustryForm input[type="checkbox"]:checked')).map(cb => cb.value)
        };
        // TODO: Save to data.json
        console.log('Industry registration:', industryData);
        alert('Industry registration will be saved to database');
    });
});