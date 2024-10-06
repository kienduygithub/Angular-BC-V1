import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { NZ_ICONS } from "ng-zorro-antd/icon";
import {
    MenuFoldOutline,
    MenuUnfoldOutline,
} from "@ant-design/icons-angular/icons";

const ICONS = [
    MenuFoldOutline,
    MenuUnfoldOutline
]

export const AntdProviders = [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: ICONS },
]