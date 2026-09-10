const form = document.getElementById("formSigno");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const data = document.getElementById("dataNascimento").value;

        if (!data) {
            document.getElementById("mensagem").textContent =
                "Por favor, informe sua data de nascimento.";

            return;
        }

        const dataNascimento = new Date(data + "T00:00:00");

        const dia = dataNascimento.getDate();
        const mes = dataNascimento.getMonth() + 1;

        let signo = "";

        // Áries
        if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
            signo = "aries";
        }

        // Touro
        else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
            signo = "touro";
        }

        // Gêmeos
        else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
            signo = "gemeos";
        }

        // Câncer
        else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
            signo = "cancer";
        }

        // Leão
        else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
            signo = "leao";
        }

        // Virgem
        else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
            signo = "virgem";
        }

        // Libra
        else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
            signo = "libra";
        }

        // Escorpião
        else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
            signo = "escorpiao";
        }

        // Sagitário
        else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
            signo = "sagitario";
        }

        // Capricórnio
        else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
            signo = "capricornio";
        }

        // Aquário
        else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
            signo = "aquario";
        }

        // Peixes
        else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
            signo = "peixes";
        }

        // Envia o usuário para a página do signo
        window.location.href = "signo.html?signo=" + signo;

    });

}
