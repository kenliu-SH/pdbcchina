import styles from './index.less';
import images from '@/assets/images';
import {
  Drawer,
  Row,
  Col,
  AutoComplete,
  Input,
  Dropdown,
  ConfigProvider,
} from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useIntl, history, useModel, getLocale } from 'umi';
import { useConnect, effect } from '@/utils/dva17';
import {
  NHome,
  EBaseInfo,
  NSearch,
  ESuggest,
  ENavBar,
  ELayoutInfo,
  EGet,
} from '@/common/action';
import {
  SUGGEST_STATUS,
  SUGGEST_STATUS_NAME,
  THEME_COLOR_LIST,
} from '@/common/enum';
import { find } from 'lodash';
import { chineseConversion } from '@/utils/trans';

import Navbar from '@/components/Navbar';
import NavBarMobile from '@/components/NavBarMobile';
import Footer from '@/components/Footer';
import LanguageSwitch from '@/components/LanguageSwitch';
import SwitchTheme from '@/components/SwitchTheme';
import AdvancedSearch from '@/pages/Search/components/AdvancedSearch/pass';

const getWindowSize = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
});

export default (props: any) => {
  const headerRef: any = useRef();
  const intl = useIntl();
  const langMode = getLocale();
  const { children } = props;
  const { initialState, setInitialState }: any = useModel('@@initialState');
  const { suggest, suggestFormat } = useConnect(NSearch);
  const { baseInfo, layoutInfo, statInfo } = useConnect(NHome);
  const [height, setHeight] = useState(56);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword]: any = useState(null);
  const [userOpen, setUserOpen] = useState(false);
  function handleResize() {
    setWindowSize(getWindowSize());
  }
  function queryHeight() {
    setHeight(headerRef?.current?.offsetHeight);
  }
  //监听浏览器窗口的变化
  useEffect(() => {
    // 监听
    window.addEventListener('resize', handleResize);
    // 销毁
    return () => window.removeEventListener('resize', handleResize);
  });
  useEffect(() => {
    setTimeout(() => {
      queryHeight();
    }, 500);
  }, [windowSize]);
  useEffect(() => {
    effect(NHome, EBaseInfo);
    effect(NHome, ENavBar);
    effect(NHome, ELayoutInfo);
    effect(NHome, EGet);
  }, []);
  const getThemeBg = () => {
    if (initialState?.theme?.indexOf('red') >= 0) {
      return windowSize.innerWidth <= 750
        ? images.themeRedBgMobile
        : images.themeRedBg;
    } else if (initialState?.theme?.indexOf('blue') >= 0) {
      return windowSize.innerWidth <= 750
        ? images.themeBlueBgMobile
        : images.themeBlueBg;
    } else if (initialState?.theme?.indexOf('green') >= 0) {
      return windowSize.innerWidth <= 750
        ? images.themeGreenBgMobile
        : images.themeGreenBg;
    } else {
      return windowSize.innerWidth <= 750
        ? images.themeYellowBgMobile
        : images.themeYellowBg;
    }
  };
  const getNickname = () => {
    const { currentUser } = initialState || {};
    const { firstname, lastname, nickname, surname } = currentUser || {};
    if (lastname && firstname) {
      return firstname + '.' + lastname;
    }
    return nickname + surname;
  };
  const getTitle = (payload: any) => {
    switch (langMode) {
      case 'en-US':
        return payload?.proteinText;
        break;
      default:
        return chineseConversion(payload?.proteinTextZh);
    }
  };
  const renderTitle = (title: string) => <span>{title}</span>;
  const renderItem = (title: string) => ({
    value: title,
    label: <div>{title}</div>,
  });
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: THEME_COLOR_LIST[initialState?.theme],
        },
      }}
    >
      <div className={[styles.layout_contain].join(' ')}>
        <div className={styles.header} style={{ paddingTop: height }}>
          <img src={getThemeBg()} className={styles.headerImg} />
          <div className={styles.header_menu} ref={headerRef}>
            <div className={styles.header_menu_content}>
              <div className={styles.menu_title}>{getTitle(layoutInfo)}</div>
              <div className={styles.navigate_pc}>
                <Navbar />
              </div>
              <div className={styles.navigate_mobile}>
                <img
                  src={images.menuMobileIcon}
                  className={styles.menuIcon}
                  onClick={() => {
                    setOpen(true);
                  }}
                />
                <div className={styles.navigate_mobile_left}>
                  {initialState && !initialState?.currentUser && (
                    <>
                      <div
                        className={styles.login_btn}
                        onClick={() => {
                          history.push('/user/login');
                        }}
                      >
                        {intl.formatMessage({
                          id: 'pages.layout.button.login',
                        })}
                      </div>
                      <div
                        className={styles.register_btn}
                        onClick={() => {
                          history.push('/user/register');
                        }}
                      >
                        {intl.formatMessage({
                          id: 'pages.layout.button.register',
                        })}
                      </div>
                    </>
                  )}
                  <LanguageSwitch />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.header_main}>
            <div className={styles.header_main_content}>
              <Row>
                <Col
                  xxl={10}
                  xl={10}
                  lg={10}
                  md={10}
                  sm={24}
                  xs={24}
                  className={styles.header_main_content_left}
                >
                  <a href="#/">
                    <img
                      src={layoutInfo?.proteinLogo || images.logo}
                      className={styles.logo}
                    />
                  </a>
                  {baseInfo?.biologicalCount && (
                    <div className={styles.left_text}>
                      {baseInfo?.biologicalCount && (
                        <span className={styles.text_tags}>
                          {baseInfo?.biologicalCount?.global}&nbsp;
                        </span>
                      )}
                      <span>
                        {langMode === 'zh-CN'
                          ? statInfo?.proteinCountZh
                          : statInfo?.proteinCount}
                        {/* Biological Macromolecular <br />
                        Structures Enabling Breakthroughs
                        <br /> in Research and Education */}
                      </span>
                    </div>
                  )}
                </Col>
                <Col
                  xxl={14}
                  xl={14}
                  lg={14}
                  md={14}
                  sm={24}
                  xs={24}
                  className={styles.header_main_content_right}
                >
                  <div className={styles.search_box}>
                    <div className={styles.search_input}>
                      <AutoComplete
                        className={styles.autoComplete}
                        backfill={true}
                        options={suggestFormat?.map((item: any) => {
                          return {
                            label: renderTitle(SUGGEST_STATUS_NAME[item.label]),
                            options: item.children.map((vo: any) => {
                              return renderItem(vo.label);
                            }),
                          };
                        })}
                        value={keyword}
                        onChange={setKeyword}
                        onSearch={(keyword: string) => {
                          effect(NSearch, ESuggest, {
                            keyword: keyword.trim(),
                          });
                        }}
                        onSelect={(value: any) => {
                          const { id, status } =
                            find(suggest, { id: value }) || {};
                          if (status === SUGGEST_STATUS['UNRELEASED']) {
                            history.push(`/unreleased/${id}`);
                          } else if (status === SUGGEST_STATUS['RELEASED']) {
                            history.push(`/entry/structure/${id}`);
                          } else if (status === SUGGEST_STATUS['DELETED']) {
                            history.push(`/structure/removed/${id}`);
                          } else if (status === SUGGEST_STATUS['chemical']) {
                            history.push(`/ligand/${id}`);
                          }
                          setTimeout(() => {
                            setKeyword(null);
                          }, 300);
                        }}
                        children={
                          <Input
                            className={styles.completeInput}
                            placeholder={intl.formatMessage({
                              id: 'pages.layout.search.placeholder',
                            })}
                            onPressEnter={({ target: { value } }: any) => {
                              history.push({
                                pathname: '/search',
                                query: {
                                  request: encodeURIComponent(
                                    JSON.stringify({
                                      query: {
                                        type: 'group',
                                        nodes: [
                                          {
                                            type: 'group',
                                            nodes: [
                                              {
                                                type: 'group',
                                                nodes: [
                                                  {
                                                    type: 'terminal',
                                                    service: 'full_text',
                                                    parameters: {
                                                      value,
                                                    },
                                                  },
                                                ],
                                                logical_operator: 'and',
                                              },
                                            ],
                                            logical_operator: 'and',
                                            label: 'full_text',
                                          },
                                        ],
                                        logical_operator: 'and',
                                      },
                                    }),
                                  ),
                                },
                              });
                              setTimeout(() => {
                                setKeyword(null);
                              }, 300);
                            }}
                          />
                        }
                      />
                      <img
                        src={images.iconSearch}
                        className={styles.iconSearch}
                      />
                    </div>
                    <a className={styles.search_link} href="#/search">
                      {intl.formatMessage({ id: 'search.advanced.title' })}
                    </a>
                  </div>
                  {!initialState?.currentUser ? (
                    <>
                      <div
                        className={styles.login_btn}
                        onClick={() => {
                          history.push('/user/login');
                        }}
                      >
                        {intl.formatMessage({
                          id: 'pages.layout.button.login',
                        })}
                      </div>
                      <div
                        className={styles.register_btn}
                        onClick={() => {
                          history.push('/user/register');
                        }}
                      >
                        {intl.formatMessage({
                          id: 'pages.layout.button.register',
                        })}
                      </div>
                    </>
                  ) : (
                    <Dropdown
                      placement="bottom"
                      trigger={['hover']}
                      menu={{ items: [] }}
                      open={userOpen}
                      onOpenChange={setUserOpen}
                      dropdownRender={() => {
                        return (
                          <div className={styles.user_dropdown}>
                            {[
                              {
                                key: '1',
                                title: 'Personal information',
                                icon: images.dropdownIcon1,
                                path: '/personal-info',
                              },
                              {
                                key: '2',
                                title: 'My PDB entry',
                                icon: images.dropdownIcon2,
                                path: '/my-pdb-entry',
                              },
                              {
                                key: '3',
                                title: 'Collection',
                                icon: images.dropdownIcon3,
                                path: '/collect',
                              },
                              {
                                key: '4',
                                title: 'Subscibe',
                                icon: images.dropdownIcon4,
                                path: '/subscibe',
                              },
                            ].map((vo: any) => (
                              <div
                                key={vo.key}
                                className={styles.dropdown_item}
                                onClick={() => {
                                  if (history.location.pathname !== vo.path) {
                                    history.push(vo.path);
                                    setUserOpen(false);
                                  }
                                }}
                              >
                                <img
                                  className={styles.dropdown_icon}
                                  src={vo.icon}
                                />
                                <span className={styles.dropdown_name}>
                                  {vo.title}
                                </span>
                              </div>
                            ))}
                            <div
                              className={styles.login_out}
                              onClick={() => {
                                setInitialState({
                                  ...initialState,
                                  currentUser: null,
                                });
                                localStorage.removeItem(Config.TOKEN);
                                history.push('/user/login');
                              }}
                            >
                              Log out
                            </div>
                          </div>
                        );
                      }}
                    >
                      <div className={styles.currentUser_button}>
                        <img
                          className={styles.userIcon}
                          src={
                            initialState?.currentUser?.photoLink || images.logo
                          }
                        />
                        <span className={styles.userName}>{getNickname()}</span>
                        <img
                          className={styles.iconDown}
                          src={images.iconDownFull}
                        />
                      </div>
                    </Dropdown>
                  )}
                  <div
                    className={styles.language_pc}
                    style={{ marginBottom: 16 }}
                  >
                    <LanguageSwitch />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles.contain}>
          <div>{children}</div>
          {initialState?.isLock !== 1 && <SwitchTheme />}
        </div>
        <Footer />
        <Drawer
          open={open}
          placement="left"
          width={335}
          className={[styles.layout_drawer, initialState?.theme].join(' ')}
          onClose={() => {
            setOpen(false);
          }}
        >
          <NavBarMobile />
        </Drawer>
      </div>
    </ConfigProvider>
  );
};
