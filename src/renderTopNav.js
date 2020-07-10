function renderTopNav(){
    const topNav = document.querySelector('.sidenav');
    console.log('Heloo')
    let categories = ['Health', 'Productivity', 'Financial', 'Miscellaneous'];

    let sideNavCategories = categories.forEach(e => {
        let cat = document.createElement('a');

        cat.href = '#'
        cat.id = `cat-${categories.indexOf(e)}`
        cat.textContent = e

        sideNav.appendChild(cat);
    })

}

export default renderSideNav