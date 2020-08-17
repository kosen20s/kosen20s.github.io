(() => {

    const header = (() => {

        const siteTitleText = 'Kosen20sのウェブサイト'

        const element = document.createElement('header');
        const headerLeftBlock = document.createElement('div');
        const headerRightBlock = document.createElement('div');
        const siteTitle = document.createElement('h1');
        const rightPositionElement = document.createElement('a');
        headerLeftBlock.classList.add('headerLeftBlock');
        headerRightBlock.classList.add('headerRightBlock');
        rightPositionElement.classList.add('openInNewTab');
        siteTitle.innerText = siteTitleText;
        rightPositionElement.href = 'https://github.com/kosen20s/kosen20s.github.io';
        rightPositionElement.innerText = 'ソースコード';
        headerLeftBlock.appendChild(siteTitle);
        headerRightBlock.appendChild(rightPositionElement);
        element.appendChild(headerLeftBlock);
        element.appendChild(headerRightBlock);
        return element
    })();

    const footer = (() => {

        const copyrightText = '(c) Kosen20s';

        const element = document.createElement('footer');
        const footerCenterBlock = document.createElement('div');
        const copyright = document.createElement('p');
        footerCenterBlock.classList.add('footerCenterBlock');
        copyright.classList.add('footerCopyright');
        copyright.innerText = copyrightText;
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

    document.body.prepend(header);
    document.body.appendChild(footer);

    for (const element of document.getElementsByTagName('a')) {
        if (element.className.includes('openInNewTab')) {
            element.setAttribute('target', '_brank');
            element.setAttribute('rel', 'noopener noreferrer');
        };
    };

})();
