import { EHighlight, ENews, NHome } from '@/common/action';
import styles from './index.less';
import { effect, useConnect } from '@/utils/dva17';
import { Carousel, Row, Col } from 'antd';
import { useIntl, getLocale } from 'umi';
import Config from '@/common/config';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import IndexMenu from '@/components/IndexMenu';
import { chineseConversion } from '@/utils/trans';

export default () => {
  const intl = useIntl();
  const locale = getLocale();
  const { baseInfo, highlights, newsList } = useConnect(NHome);
  useEffect(() => {
    effect(NHome, EHighlight, { isHomePage: 1, page: 1, pageSize: 4 });
    effect(NHome, ENews, { isHomePage: 1, page: 1, pageSize: 4 });
  }, []);
  function getTitle(record: any) {
    if (locale === 'en-US') return record.zhTitle;
    return chineseConversion(record.title);
  }
  function getAbstract(record: any) {
    if (locale === 'en-US') return record.zhAbstract;
    return chineseConversion(record.abstract);
  }
  function getSummary(record: any) {
    if (locale === 'en-US') return record.zhSummary;
    return chineseConversion(record.summary);
  }
  return (
    <div className={styles.home_page}>
      <Carousel>
        {baseInfo?.banners?.map((vo: any) => (
          <div
            key={vo.id}
            className={styles.carousel_item}
            onClick={() => {
              const { link } = vo;
              if (link) window.open(link);
            }}
          >
            <img src={vo.image} />
          </div>
        ))}
      </Carousel>
      <IndexMenu />
      <div className={styles.list_content}>
        <Row gutter={[27, 27]}>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <div className={styles.list_item}>
              <div className={styles.item_head}>
                <span>
                  {intl.formatMessage({ id: 'pages.index.item.title1' })}
                </span>
                <a
                  className={styles.jump_link}
                  href={`#/search?newFlag=1`}
                  // href={`#/search?query=${encodeURIComponent(
                  //   JSON.stringify({
                  //     type: 'group',
                  //     logical_operator: 'and',
                  //     nodes: [
                  //       {
                  //         type: 'group',
                  //         nodes: [
                  //           {
                  //             type: 'group',
                  //             nodes: [
                  //               {
                  //                 type: 'terminal',
                  //                 service: 'text',
                  //                 parameters: {
                  //                   type: 'item',
                  //                   attribute: 'pdbc_entry.releasedDate',
                  //                   name: 'Release Date',
                  //                   placeholder:
                  //                     'Enter a date between 5/18/1976 and 3/14/2023',
                  //                   header_index: 1,
                  //                   isSupport: true,
                  //                   index: '1-4',
                  //                   disabled: false,
                  //                   negation: false,
                  //                   operator: 'equals',
                  //                   value:
                  //                     baseInfo?.lastUpdate &&
                  //                     dayjs(baseInfo.lastUpdate).format(
                  //                       'YYYY-MM-DD',
                  //                     ),
                  //                 },
                  //                 uiAttrMap: {
                  //                   context: ['default-match'],
                  //                   description:
                  //                     'The entry initial release date.',
                  //                   enum_len: 0,
                  //                   enum_annotated_len: 0,
                  //                   examples: ['2020-01-10', '2018-01-23'],
                  //                   examples_len: 2,
                  //                   format: 'date',
                  //                   has_desc: 'y',
                  //                   search_group_name: 'Structure Details',
                  //                   search_group_priority: 25,
                  //                   selector: true,
                  //                   type: 'string',
                  //                   display_name: 'Release Date',
                  //                   min: '5/18/1976',
                  //                   max: '3/14/2023',
                  //                   is_iterable: false,
                  //                   operators: [
                  //                     'equals',
                  //                     'greater',
                  //                     'greater_or_equal',
                  //                     'less',
                  //                     'less_or_equal',
                  //                     'range_upper_excl',
                  //                     'range_upper_incl',
                  //                     'last_seven_days_range',
                  //                     'last_thirty_days_range',
                  //                     'exists',
                  //                   ],
                  //                   default_operator: 'greater',
                  //                   useIn: false,
                  //                   ui: true,
                  //                 },
                  //               },
                  //             ],
                  //             logical_operator: 'and',
                  //           },
                  //         ],
                  //         logical_operator: 'and',
                  //         label: 'text',
                  //       },
                  //     ],
                  //   }),
                  // )}`}
                >
                  {baseInfo?.lastUpdate &&
                    dayjs(baseInfo.lastUpdate).format('YYYY-MM-DD')}
                </a>
              </div>
              <div className={styles.item_data}>
                {baseInfo?.newPDBList?.map((vo: any) => (
                  <div className={styles.item_date_item} key={vo.structureId}>
                    <img
                      src={
                        Config.SERVER_HOME +
                        `file/v2/pdb/3dImage/${vo.id.toLowerCase()}-assembly1.png`
                      }
                    />
                    <div className={styles.item_info}>
                      <a
                        className={styles.name}
                        href={`#/entry/structure/${vo.id}`}
                      >
                        {vo.id}
                      </a>
                      <div className={styles.desc}>
                        {vo.structureSummaryVO?.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <div className={styles.list_item}>
              <div className={styles.item_head}>
                <span>
                  {intl.formatMessage({ id: 'pages.index.item.title2' })}
                </span>
                <a
                  href={`#/highlights?id=${
                    highlights?.rows[0]?.id
                  }&currentYear=${dayjs(
                    highlights?.rows[0]?.releaseTime,
                  ).format('YYYY')}`}
                  className={styles.head_more}
                >
                  {intl.formatMessage({ id: 'pages.index.item.more' })}
                </a>
              </div>
              <div className={styles.item_data}>
                {highlights?.rows?.map((vo: any) => (
                  <div className={styles.highLights_item} key={vo.id}>
                    <a
                      className={styles.highLights_item_title}
                      href={`#/highlights?id=${vo.id}&currentYear=${dayjs(
                        vo.releaseTime,
                      ).format('YYYY')}`}
                    >
                      {getTitle(vo)}
                    </a>
                    <div className={styles.flex_info}>
                      <img
                        src={vo.miniImage}
                        className={styles.highLights_item_img}
                      />
                      <div className={styles.highLights_item_desc}>
                        {getAbstract(vo)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <div className={styles.list_item}>
              <div className={styles.item_head}>
                <span>
                  {intl.formatMessage({ id: 'pages.index.item.title3' })}
                </span>
                <a
                  href={`#/news?id=${newsList?.rows[0]?.id}&currentYear=${dayjs(
                    newsList?.rows[0]?.releaseTime,
                  ).format('YYYY')}`}
                  className={styles.head_more}
                >
                  {intl.formatMessage({ id: 'pages.index.item.more' })}
                </a>
              </div>
              <div className={styles.item_data}>
                {newsList?.rows?.map((vo: any) => (
                  <div className={styles.news_item} key={vo.id}>
                    <a
                      href={`#/news?id=${vo.id}&currentYear=${dayjs(
                        vo.releaseTime,
                      ).format('YYYY')}`}
                    >
                      <img
                        src={vo.summaryPicture}
                        className={styles.news_item_img}
                      />
                    </a>
                    <a
                      className={styles.news_item_title}
                      href={`#/news?id=${vo.id}&currentYear=${dayjs(
                        vo.releaseTime,
                      ).format('YYYY')}`}
                    >
                      {getTitle(vo)}
                    </a>
                    <div className={styles.news_item_date}>
                      {dayjs(vo.createdAt).format('YYYY/MM/DD')}
                    </div>
                    <div className={styles.news_item_desc}>
                      {getSummary(vo)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
