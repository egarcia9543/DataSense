
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

