let daftarTugas = [];

function tambahkanTugas() {
    const inputTugas = document.getElementById('tugas-baru');
    const teksTugas = inputTugas.value.trim();
    
    if (teksTugas === '') {
        alert("Masukkan tugas yang valid!");
        return;
    }

    const idTugas = daftarTugas.length + 1;
    daftarTugas.push({ id: idTugas, teks: teksTugas });

    tampilkanTugas();
    inputTugas.value = '';
}

function tampilkanTugas() {
    const daftarTugasElement = document.getElementById('daftar-tugas');
    daftarTugasElement.innerHTML = '';

    daftarTugas.forEach(tugas => {
        const li = document.createElement('li');
        const teksTugas = document.createElement('span');
        teksTugas.textContent = tugas.teks;
        
        const tombolHapus = document.createElement('button');
        tombolHapus.textContent = 'Hapus';
        tombolHapus.onclick = () => hapusTugas(tugas.id);

        const tombolEdit = document.createElement('button');
        tombolEdit.textContent = 'Edit';
        tombolEdit.onclick = () => editTugas(tugas.id);

        li.appendChild(teksTugas);
        li.appendChild(tombolEdit);
        li.appendChild(tombolHapus);

        daftarTugasElement.appendChild(li);
    });
}

function hapusTugas(id) {
    daftarTugas = daftarTugas.filter(tugas => tugas.id !== id);
    tampilkanTugas();
}

function editTugas(id) {
    const teksBaru = prompt("Edit tugas Anda:");
    if (teksBaru.trim() === '') {
        alert("Tugas tidak boleh kosong.");
        return;
    }
    
    daftarTugas = daftarTugas.map(tugas => 
        tugas.id === id ? { ...tugas, teks: teksBaru } : tugas
    );
    
    tampilkanTugas();
}
