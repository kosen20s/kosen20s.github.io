(() => {

    const footer = (() => {

        const copyrightText = '(c) Kosen20s';

        const element = document.createElement('footer');
        const footerCenterBlock = document.createElement('div');
        footerCenterBlock.classList.add('footerCenterBlock');
        const copyright = document.createElement('p');
        copyright.classList.add('footerCopyright');
        copyright.appendChild(document.createTextNode(copyrightText));
        footerCenterBlock.appendChild(copyright);
        element.appendChild(footerCenterBlock);
        return element
    })();

    const createMetaWithNC = (name, content) => {
        const element = document.createElement('meta');
        element.setAttribute('name', name);
        element.setAttribute('content', content);
        return element
    };

    const createMetaWithPC = (property, content) => {
        const element = document.createElement('meta');
        element.setAttribute('property', property);
        element.setAttribute('content', content);
        return element
    };

    for (const element of [
        createMetaWithPC('og:url', 'https://kosen20s.github.io/'),
        createMetaWithPC('og:type', 'website'),
        createMetaWithPC('og:title', document.title),
        createMetaWithPC('og:description', 'Kosen20sのページです'),
        createMetaWithPC('og:site_name', 'Kosen20s\' WebSite'),
        createMetaWithPC('og:image', 'https://hoge.com/fuga.png'),
        createMetaWithNC('twitter:card', 'summary')
    ]) {
        document.head.appendChild(element);
    };

    document.body.appendChild(footer);

    for (const element of document.getElementsByTagName('a')) {
        if (element.className.includes('openInNewTab')) {
            element.setAttribute('target', '_brank');
            element.setAttribute('rel', 'noopener noreferrer');
        };
    };

})();
