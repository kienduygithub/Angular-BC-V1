import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { NZ_ICONS } from "ng-zorro-antd/icon";
import {
    AntDesignOutline,
    HomeOutline,
    MailOutline,
    MenuFoldOutline,
    MenuUnfoldOutline,
    TeamOutline,
} from "@ant-design/icons-angular/icons";

const ICONS = [
    MenuFoldOutline,
    MenuUnfoldOutline,
    MailOutline,
    HomeOutline,
    TeamOutline,
    AntDesignOutline
]

export const AntdProviders = [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: ICONS },
]