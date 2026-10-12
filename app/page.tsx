export default function Home() {
  return (
    <>
      {/* Header dan navigation */}
      <header className="header">
        <div className="header-container">
          <a href="#beranda" className="logo">Kopi <span>Nusantara</span></a>

          {/* mobile navigation */}
          <button
            type="button"
            className="menu-icon-btn"
            id="menu-btn"
            aria-label="Toggle Navigation"
          >
            <i className='bx bx-menu' id="menu-icon"></i>
          </button>

          <nav className="nav-bar">
            <a href="#beranda" className="nav-link active">Beranda</a>
            <a href="#tentang" className="nav-link">Tentang</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#kontak" className="nav-link">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="beranda" id="beranda">
        <div className="beranda-overlay">
          <div className="home-content">
            <span className="label">Kedai Kopi Rumahan</span>
            <h1>Kopi <span>Nusantara</span></h1>
            <h3>Racikan Rumah, Cita Rasa Nusantara</h3>
            <p>Nikmati kehangatan racikan kopi rumahan khas tanah air langsung di tempat kami atau dari kenyamanan rumah Anda.</p>
            <a href="#menu" className="btn">Lihat Menu</a>
          </div>
        </div>
      </section>

      <main>
        {/* Section Tentang */}
        <section id="tentang" className="tentang">
          <div className="section-container">
            <div className="tentang-wrapper">
              <span className="tentang-label">Tentang Kopi Nusantara</span>
              <div className="tentang-gambar">
                <img src="/images/logo.jpg" alt="Kopi Nusantara Logo" className="responsive-img" />
              </div>

              <div className="tentang-content">
                <p className="tentang-deskripsi">
                  Kopi Nusantara adalah usaha kedai kopi rumahan yang berdiri sejak tahun 2024. 
                  Kami menyajikan biji kopi pilihan terbaik dari berbagai daerah di Indonesia dan dunia dengan 
                  proses penyeduhan penuh dedikasi untuk menghadirkan rasa otentik di setiap cangkirnya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Rekomendasi */}
        <section id="rekomendasi" className="rekomendasi">
          <div className="section-container">
            <h2 className="section-title">Rekomendasi Favorit</h2>
            <div className="rekomendasi-grid">
              <article className="rekomendasi-produk">
                <div className="img-wrapper">
                  <img src="/images/menu/tubruk.jpg" alt="Kopi Tubruk" className="responsive-img" />
                </div>
                <div className="card-info">
                  <h4>Kopi Tubruk</h4>
                  <div className="detail-content">
                    <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                    <a href="#coffee" className="btn-detail">Lihat Detail</a>
                  </div>
                </div>
              </article>

              <article className="rekomendasi-produk">
                <div className="img-wrapper">
                  <img src="/images/menu/mango.jpg" alt="Mango Blast" className="responsive-img" />
                </div>
                <div className="card-info">
                  <h4>Mango Blast</h4>
                  <div className="detail-content">
                    <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                    <a href="#smoothies" className="btn-detail">Lihat Detail</a>
                  </div>
                </div>
              </article>

              <article className="rekomendasi-produk">
                <div className="img-wrapper">
                  <img src="/images/menu/melati.jpg" alt="Teh Melati" className="responsive-img" />
                </div>
                <div className="card-info">
                  <h4>Teh Melati</h4>
                  <div className="detail-content">
                    <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                    <a href="#tea" className="btn-detail">Lihat Detail</a>
                  </div>
                </div>
              </article>

              <article className="rekomendasi-produk">
                <div className="img-wrapper">
                  <img src="/images/menu/chocolate.jpeg" alt="Chocolate Signature" className="responsive-img" />
                </div>
                <div className="card-info">
                  <h4>Chocolate Signature</h4>
                  <div className="detail-content">
                    <p className="rating"><i className='bx bxs-star'></i> 5.0</p>
                    <a href="#others" className="btn-detail">Lihat Detail</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section Menu Utama */}
        <section id="menu" className="menu">
          <div className="section-container">
            <h2 className="section-title">Daftar Menu</h2>

            {/* Pencarian Menu */}
            <div className="search-wrapper">
              <i className='bx bx-search'></i>
              <input type="text" id="searchMenu" className="search-input" placeholder="Cari menu..." />
            </div>

            {/* Navigasi Menu */}
            <nav className="kategori-nav">
              <div className="kategori-container">
                <a href="#coffee" className="kategori-btn active">Kopi</a>
                <a href="#smoothies" className="kategori-btn">Smoothies</a>
                <a href="#tea" className="kategori-btn">Teh</a>
                <a href="#others" className="kategori-btn">Lainnya</a>
              </div>
            </nav>

            {/* Kategori 1: Coffee */}
            <div id="coffee" className="kategori-menu">
              <h3 className="judul-kategori">Kopi</h3>
              <div className="menu-grid">
                <article className="card-produk" tabIndex={0}>
                  <div className="img-wrapper">
                    <img src="/images/menu/tubruk.jpg" alt="Kopi Tubruk" className="responsive-img" />
                  </div>
                  <div className="card-info">
                    <h4>Kopi Tubruk</h4>
                    <div className="detail-expand">
                      <p className="deskripsi">Kopi hitam tradisional diseduh langsung dengan gula batu.</p>
                      <span className="harga">Rp 15.000</span>
                    </div>
                  </div>
                </article>

                <article className="card-produk" tabIndex={0}>
                  <div className="img-wrapper">
                    <img src="/images/menu/gayo.jpeg" alt="Kopi Aceh Gayo" className="responsive-img" />
                  </div>
                  <div className="card-info">
                    <h4>Kopi Aceh Gayo</h4>
                    <div className="detail-expand">
                      <p className="deskripsi">Biji kopi arabika Gayo dengan aroma khas dan body tebal.</p>
                      <span className="harga">Rp 23.000</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </section>

        {/* Section FAQ */}
        <section id="faq" className="faq">
          <div className="section-container">
            <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>

            <div className="faq-list">
              <div className="faq-item">
                <button type="button" className="faq-question">
                  <span>Apakah tersedia fasilitas WiFi dan stop kontak untuk bekerja (WFC)?</span>
                  <i className='bx bx-chevron-down faq-icon'></i>
                </button>
                <div className="faq-answer">
                  <p>Tentu saja. Kami menyediakan wifi gratis dan memastikan sebagian besar meja di area indoor dilengkapi dengan akses stop kontak untuk kenyamanan konsumen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontak">
        <div className="isi-footer">
          <h3>Kopi Nusantara</h3>
          <p>
            <i className='bx bx-map'></i> Jl. Nagara No. 25, Jakarta | 
            <i className='bx bx-time-five'></i> Buka Setiap Hari: 08.00 - 22.00 WIB | 
            <i className="bx bx-phone"></i> 081122334455
          </p>
          {/* Identitas Nama & NIM yang wajib ada untuk tugas */}
          <p className="mt-2 font-semibold text-amber-400">
            Dibuat oleh: Felicia Frederica (535250027)
          </p>
          <p className="copyright">&copy; 2026 Kopi Nusantara. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Tombol Back to Top */}
      <button className="back-to-top" id="backToTop" aria-label="Kembali ke atas">
        <i className='bx bx-up-arrow-alt'></i>
      </button>
    </>
  );
}