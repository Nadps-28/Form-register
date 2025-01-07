// Fungsi untuk menampilkan halaman sesuai keinginan

function showPage(page) {
  // Menghapus kelas active dari semua halaman
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  // Menambahkan kelas active pada halaman yang dipilih
  document.getElementById(page).classList.add('active');
}

// Fungsi jika ada form yang tidak diisi maka akan error

// Menunggu sampai DOM siap

document.addEventListener('DOMContentLoaded', () => {
  
  // Mencegah Halaman ter-refresh
  
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Mendapatkan nilai input field
    
    const name = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('no.tlp').value;
    const message = document.getElementById('pesan').value;
    
    // validasi menggunakan if else
    
    if (name === '' || email === '' || phone === '' || message === '') {
      alert('Harap Isi field yang kosong!!');
    }
    else {
      alert('Form berhasil dikirim:)');
    }
    
    // Mengosongkan field yang sudah berhasil dikirim
    
    setTimeout (() => {
      document.getElementById('nama').value = '';
      document.getElementById('email').value = '';
      document.getElementById('no.tlp').value = '';
      document.getElementById('pesan').value = '';
    }, 4500);
  });
});