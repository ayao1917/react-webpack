'use strict';

import React from 'react';

export default class SecondPage extends React.Component {
    render() {
        return (
            <div className="component-wrapper">
                <h1>Second Page</h1>

                <div className="wrapped-content">
                    <p className="content">
                        2TVNow影音互動平台提供第二螢裝置與電視互動的整合方案，使用者可以透過手機或是平板，
                        輕鬆的和電視進行互動，創造更深入且豐富的觀賞體驗，只要內容夠吸引人、使用者對於第二
                        螢幕的需求夠強烈，使用習慣一旦建立，第二螢幕的普及和更龐大商機，便是指日可待。
                    </p>
                    <p className="content"> 若有興趣，歡迎與我們連絡
                        財團法人資訊工業策進會 智通所
                        105 台北市松山區民生東路四段133號7樓
                        業務人員 - 顏彩純 &nbsp; (02)6607-3898 &nbsp; <a href="mailto:hsu@iii.org.tw">
                        jessieyen@iii.org.tw</a>
                        版本: v1.0
                    </p>
                </div>
            </div>
        );
    }
}