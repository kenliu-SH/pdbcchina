import { THEME_COLOR_LIST } from '@/common/enum';
import styles from './styles.less';
import { useState } from 'react';
import { changeRootClassName } from '@/utils/utils';
import { useIntl, useModel } from 'umi';
import images from '@/assets/images';

const THEME_COLOR = [
  [
    { className: 'red_deep_theme', color: THEME_COLOR_LIST['red_deep_theme'] },
    {
      className: 'green_deep_theme',
      color: THEME_COLOR_LIST['green_deep_theme'],
    },
    {
      className: 'blue_deep_theme',
      color: THEME_COLOR_LIST['blue_deep_theme'],
    },
    {
      className: 'yellow_deep_theme',
      color: THEME_COLOR_LIST['yellow_deep_theme'],
    },
  ],
  [
    {
      className: 'red_middle_theme',
      color: THEME_COLOR_LIST['red_middle_theme'],
    },
    {
      className: 'green_middle_theme',
      color: THEME_COLOR_LIST['green_middle_theme'],
    },
    {
      className: 'blue_middle_theme',
      color: THEME_COLOR_LIST['blue_middle_theme'],
    },
    {
      className: 'yellow_middle_theme',
      color: THEME_COLOR_LIST['yellow_middle_theme'],
    },
  ],
  [
    {
      className: 'red_shallow_theme',
      color: THEME_COLOR_LIST['red_shallow_theme'],
    },
    {
      className: 'green_shallow_theme',
      color: THEME_COLOR_LIST['green_shallow_theme'],
    },
    {
      className: 'blue_shallow_theme',
      color: THEME_COLOR_LIST['blue_shallow_theme'],
    },
    {
      className: 'yellow_shallow_theme',
      color: THEME_COLOR_LIST['yellow_shallow_theme'],
    },
  ],
];

export default () => {
  const intl = useIntl();
  const { initialState, setInitialState } = useModel('@@initialState');
  const [switchTheme, setSwitchTheme] = useState(false);
  const onChangeTheme = (vo: any) => {
    changeRootClassName(vo.className);
    setInitialState({
      ...initialState,
      theme: vo.className,
    });
  };
  return (
    <div className={styles.theme_switch_button}>
      <div
        className={[
          styles.theme_list,
          switchTheme ? styles.theme_list_open : '',
        ].join(' ')}
      >
        <div className={styles.theme_select}>
          {THEME_COLOR?.map((item: any, i: number) => {
            return (
              <div key={i}>
                {item.map((vo: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={[styles.theme_border].join(' ')}
                      style={
                        initialState?.theme === vo.className
                          ? {
                              border: `2px solid ${vo.color}`,
                            }
                          : {}
                      }
                    >
                      <div
                        className={[styles.theme_color].join(' ')}
                        style={{ backgroundColor: vo.color }}
                        onClick={() => {
                          onChangeTheme(vo);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={styles.theme_switch}
        onClick={() => {
          setSwitchTheme(!switchTheme);
        }}
      >
        <img className={styles.icon_switch} src={images.themeSwitch} />
        <span className={styles.tips_switch}>
          {intl.formatMessage({ id: 'theme.title' })}
        </span>
      </div>
    </div>
  );
};
