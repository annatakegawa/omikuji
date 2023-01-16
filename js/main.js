'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        /*
        // 配列を使う方法
        const results = ['大吉', '中吉', '凶', '末吉'];
        // nを出してからインデックスとして使う方法
            // const n = Math.floor(Math.random() * results.length);
            // btn.textContent = results[n];
        // いっきにインデックスを計算する方法
        btn.textContent = results[Math.floor(Math.random() * results.length)];
        */

        // switch文を使う方法
        /*
        switch(n) {
            case 0:
                btn.textContent = '大吉';
                break;
            case 1:
                btn.textContent = '中吉';
                break;
            case 2: 
                btn.textContent = '凶';
                break;
        }
        */

        // おみくじの確率を操作する
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉'; // 5%
        } else if (n < 0.75) {
            btn.textContent = '中吉'; // 70%
        } else {
            btn.textContent = '凶'; // 25%
        }
    })
}