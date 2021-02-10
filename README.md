## Cara memasang script adalah: 

* Login ke blogger
* Buka Menu "Tema"
* Pada tema terpilih, klik tanda panah yang ke bawah. Akan muncul beberapa menu. Pilih menu "Edit HTML"
* Klik scriptnya yang ada di blogger. Tekan "Ctrl+F"
* Masukkan kata "</head>" lalu tekan enter
* copy isi file "kutipan.js"
* paste sebelum tag "</head>"
* lalu simpan -- (tekan tombol disket di bagian kanan atas) -- sampai ada notifikasi "Update Berhasil..."

## Cara pemakaian:

* Tulis artikel seperti biasa
* Masukkan skrip dengan cara pertama (jika ada sumber URL dan judul):
`<p>Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf.<ref sumber="https://www.alamatweb.com/post1/" judul="Postingan Pertama"></ref> Isi paragraf Isi paragraf Isi paragraf Isi paragraf Isi paragraf.</p>`
* Masukkan skrip dengan cara kedua (jika ada sumber URL saja):
`<p>Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf.<ref sumber="https://www.alamatweb.com/post1/"></ref> Isi paragraf Isi paragraf Isi paragraf Isi paragraf Isi paragraf.</p>`
* Masukkan skrip dengan cara ketiga (jika hanya referensi offline):
`<p>Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf. Isi tulisan paragraf.<ref judul="Buku 1 halan 2"></ref> Isi paragraf Isi paragraf Isi paragraf Isi paragraf Isi paragraf.</p>`
* Untuk memunculkan isi kutipan, buat ini di akhir artikel
`<h2>Catatan kaki:</h2>`
`<ol id="footnotes"></ol>`
