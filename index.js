document.addEventListener('DOMContentLoaded', () => {
    // setContentUpperMargin();

    document.addEventListener('resize', () => {
        // setContentUpperMargin();
    });

    document.addEventListener('scroll', (event) => {
        console.log(event);
        console.log('scrolling');
    });
    setAllPoints();
    // for desc change
    setInterval(() => {
        changeDesc();
    }, 3000);
    // for cursor
    setInterval(() => {
        descCursor();
    }, 500);
});

document.addEventListener('click', (event) => {
    if (
        !event.target.classList.contains('point-title')
        // && !event.target.classList.contains('exp-point') &&
        // event.target.classList.contains('<i')
    ) {
        showExpPoints(null);
    }
});

function setAllPoints() {
    const points = document.querySelectorAll('.point');

    points.forEach((point) => {
        let pointExpList = point.querySelectorAll('.exp-point');
        getAllExpPoints(point, pointExpList);
    });
}

function getAllExpPoints(point, pointExpList) {
    // console.log(expPointsList.length);
    // debugger
    const titleWidth =
        point.querySelector('.point-title').getBoundingClientRect().width / 1.2;
    const angleDiff = 360 / pointExpList.length;
    let angle = angleDiff;
    for (let i = 0; i < pointExpList.length; i++) {
        let angleRadian = (angle * Math.PI) / 180;
        x = Math.cos(angleRadian) * titleWidth;
        if (x > 0) x = Math.floor(x);
        else x = Math.ceil(x);
        // * element.width;
        y = Math.sin(angleRadian) * titleWidth;
        if (y > 0) y = Math.floor(y);
        else y = Math.ceil(y);

        // * element.height;
        pointExpList[i].style.transform = `translate(${x}px,${y}px)`;
        // points.append((x, y));

        // console.log(points);
        angle += angleDiff;
    }
}

function showExpPoints(id) {
    // hide all exp-points
    document.querySelectorAll('.exp-point').forEach((el) => {
        el.style.visibility = 'hidden';
        el.style.opacity = 0;
    });

    // const title = document.getElementById(id);
    document.querySelectorAll(`#${id} ~ .exp-point`).forEach((el) => {
        el.style.visibility = 'visible';
        el.style.opacity = 1;
    });
}

function changeDesc() {
    let desc = document.querySelector('.desc');

    const descList = [
        'Computer Engineer',
        'Software Engineer',
        'Writer',
        'Human',
        'Forntend Dev',
        'Backend Dev',
        'ChatGPT User',
        'Breaking Bad Fan',
        'das auto',
        'Gamer',
    ];
    let newDesc = descList[Math.floor(Math.random() * descList.length)];
    while (newDesc == desc.innerHTML)
        newDesc = descList[Math.floor(Math.random() * descList.length)];

    const coords = ['15px', '-15px'];
    const randomCoord = () => {
        return coords[Math.floor(Math.random() * coords.length)];
    };
    desc.style.visibility = 'hidden';
    setTimeout(() => {
        desc.style.visibility = 'visible';
    }, 200);
    desc.innerHTML = generateRandomString(newDesc.length);
    desc.style.transform = `translate(${randomCoord()}, ${randomCoord()})`;
    setTimeout(() => {
        desc.style.transform = 'unset';
        desc.innerHTML = newDesc;
    }, 500);
}

function descCursor() {
    const desc = document.querySelector('.desc').innerHTML;
    if (desc.includes('_')) {
        document.querySelector('.desc').innerHTML = desc.replace('_', '');
    } else {
        document.querySelector('.desc').innerHTML = desc + '_';
    }
}

function generateRandomString(length) {
    const characters =
        '!@#$%^&*()_-+=~`[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRST!@#$%^&*()_-+=~`[]{}|;:,.<>?UVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=~`[]{}|;:,.<>?';

    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

// function setContentUpperMargin() {
//     const bannerHeight = document
//         .querySelector('.banner')
//         .getBoundingClientRect().height;
//     document.querySelector('.content').style.marginTop = bannerHeight + 'px';
// }
