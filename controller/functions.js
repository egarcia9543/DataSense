const nodemailer = require('nodemailer');

exports.landingPage = (req, res) => {
    res.render('index');
};

exports.aboutPage = (req, res) => {
    const aboutIntroduction = 'En un mundo cada vez más digitalizado y competitivo, el poder de los datos se ha convertido en un factor decisivo para el éxito de cualquier empresa. Es aquí donde DateSense Solutions emerge como un aliado estratégico para las empresas que buscan potenciar su rendimiento y tomar decisiones basadas en datos sólidos y precisos. Como expertos en gestión y análisis de datos, DateSense Solutions se ha ganado una reputación en el mercado como un socio confiable y capaz de brindar soluciones personalizadas a las necesidades de sus clientes.'
    const aboutSection = 'El proceso de gestión de datos puede ser complejo y abrumador, especialmente para las empresas que no cuentan con un equipo de especialistas en la materia. DateSense Solutions entra en juego al ofrecer asesoramiento experto en gestión de datos. Evaluamos las necesidades específicas de cada cliente y desarrollamos estrategias a medida que se alinean con sus objetivos comerciales. Desde la recopilación hasta el almacenamiento y la protección de datos, nuestra empresa brinda soluciones que garantizan una gestión eficiente y segura.'
    const mision = 'En DateSense Solutions, nuestra misión es capacitar a las empresas para que tomen decisiones inteligentes y estratégicas a través del poder de los datos. Nos dedicamos a proporcionar soluciones de gestión y análisis de datos que permitan a nuestros clientes aprovechar al máximo su información para lograr un crecimiento sostenible y una ventaja competitiva en un mundo empresarial en constante cambio.'
    const vision = 'Nuestra visión es convertirnos en líderes reconocidos a nivel mundial en soluciones de gestión y análisis de datos. Aspiramos a ser la opción preferida para las empresas que buscan una transformación significativa a través del uso inteligente de sus datos.'
    res.render('about', {aboutIntroduction, aboutSection, mision, vision});
}

exports.toolsPage = (req, res) => {
    res.render('tools');
}

exports.tableauPage = (req, res) => {
    const tableauDescription = 'Tableau es una poderosa herramienta de visualización y análisis de datos que permite transformar información compleja en gráficos interactivos y paneles fáciles de entender. Con una interfaz amigable y herramientas intuitivas, Tableau es ampliamente reconocido como uno de los líderes en el campo de la visualización de datos. Esta herramienta permite a los usuarios conectarse a diversas fuentes de datos, combinarlos y crear visualizaciones dinámicas que facilitan el descubrimiento de ideas y patrones ocultos.'
    const tableauDescription2 = 'Tableau es versátil y puede utilizarse en diferentes sectores, desde negocios y finanzas hasta educación, salud y más. Su capacidad para conectarse a fuentes de datos en tiempo real, bases de datos, hojas de cálculo y archivos en la nube lo convierte en una herramienta valiosa para aquellos que buscan explorar y comunicar datos de manera efectiva.'
    res.render('tableau', {tableauDescription, tableauDescription2});
}

exports.learnPage = (req, res) => {
    const learnIntroduction = 'En DateSense Solutions, creemos que el conocimiento es la clave para el crecimiento personal y profesional. Por ello, nos complace presentar nuestra sección de Aprendizaje y Formación, donde ofrecemos una selección de cursos gratuitos para que las personas puedan desarrollar nuevas habilidades y ganar experiencia en diversas áreas.'
    res.render('learn', {learnIntroduction});
}

exports.resourcesPage = (req, res) => {
    res.render('resources');
}

exports.contactPage = (req, res) => {
    res.render('contact');
}

exports.sendEmail = (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',  
        auth: {
            user: `${process.env.GMAIL}`, 
            pass: `${process.env.GPASS}` 
        }
    });

    let mailOptions = {
        from: `${process.env.GMAIL}`,
        to: req.body.emailContact, 
        subject: 'Gracias por contactarnos', 
        text: `Hola ${req.body.nameContact}, gracias por contactarnos. En breve uno de nuestros asesores se pondrá en contacto contigo para solucionar tus dudas.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado satisfactoriamente');
            res.redirect('/')
        }
    });
}