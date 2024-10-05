import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'admin-header-notify',
    template: `
        <div class="header-notify-container">
            <div class="content">
                <p class="title">
                    Thông báo mới
                </p>
                <span class="message">
                    Có thông báo mới
                </span>
            </div>
            <span class="time-ago">5 phút trước</span>
        </div>
    `,
    styles: [`
        .header-notify-container{
            position: relative;
            height: 80px;
            padding: 15px 20px;
            box-sizing: border-box;
            transition: all 0.2s ease;
        }

        .header-notify-container:hover{
            background-color: #aaa;
        }

        .header-notify-container::before{
            content: "";
            width: 10px;
            height: 40px;
            background-color: #3C91E6;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            border-radius: 0 12px 12px 0;
        }

        .header-notify-container .content{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            font-size: 13px;
            color: #1f1f1f;
        }
        .content p{
            font-size: 14px;
            font-weight: 550;
            margin: 0;
            padding: 0;
        }

        .time-ago{
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            font-size: 11px;
            color: #ccc;
        }
    `]
})

export class AdminHeaderNotifyComponent {

}