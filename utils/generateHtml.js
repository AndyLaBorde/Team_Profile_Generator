class Html {

    static generateIntern(data) {
    return `<div class="col-3 bg-light text-center p-3 m-3 rounded ">
      <h2>${data.name}</h2>
      <h3>${data.role}</h3>
      <p>ID:${data.id}</p>
      <a href="mailto: ${data.email}"
        >Email:${data.email}</a
      >
      <p>School:${data.school}</p>
      </div>`;
}

    static generateEngineer(data) {
    return `
        <div class="col-3 bg-light text-center p-3 m-3 rounded">
                <h2>${data.name}</h2>
                <h3>${data.role}</h3>
                <p>ID:${data.id}</p>
                <a href="mailto: ${data.email}"
                  >Email:${data.email}</a
                >
                <br>
                <a href="https://github.com/${data.gitHub}" target="_blank">GitHub:${data.gitHub}</a>
                </div>`;
}

    static generateHtml(data){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-secondary">
    <h1 class="text-center bg-primary p-3">My Team</h1>
    <div class= "d-flex justify-content-center">
    <div class = "row justify-content-center p-3 m-3">
    <main id="main" class="d-flex vw-100 justify-content-center align-items-center">
      
      <div class="col-4 bg-light text-center p-3 m-3 rounded">
            <h2>${data.name}</h2>
            <h3>${data.role}</h3>
            <p>ID:${data.id}</p>
            <a href="mailto: ${data.email}"
              >Email:${data.email}</a
            >
            <p>Office#:${data.officeNum}</p>
            </div>
    </main>
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;

    }
}
module.exports = Html