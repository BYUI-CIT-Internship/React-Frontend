function Import() {
    return (
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="google-signin-scope" content="profile email" />
            <meta name="google-signin-client_id"
                content= "567295502131-utunljme5lr7apa1cvi1f80bvn4e7ojh.apps.googleusercontent.com" />
            <script src="https://apis.google.com/js/platform.js?onload=onLoad" async defer></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <title>Student Dashboard View</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
            <link rel="stylesheet" href="styles.css" />
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script type="module" src="studentDropDownView.js" defer></script>
            <script type="module" src="../signIn_signOut/signout.js" defer></script>
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </head>
    )
}export default Import