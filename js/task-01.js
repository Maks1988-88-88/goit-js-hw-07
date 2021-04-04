const getItem = () => {

    const categories = document.querySelector('#categories');

    const categoriesTotal = document.querySelectorAll('#categories ul');
    console.log('Количество категорий:',categoriesTotal.length);

    const allItem = document.querySelectorAll('.item');

    for (const item of allItem) {
        const categoriesHeadName = item.querySelector('#categories h2');
        const categoriesLength = item.querySelectorAll('ul li');
        console.log(`Категория: ${categoriesHeadName.textContent}`);
        console.log(`Количество элементов: ${categoriesLength.length}`);
    }

}

getItem();
