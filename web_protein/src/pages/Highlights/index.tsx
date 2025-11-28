import styles from './index.less';
import { getLocale, history, useIntl } from 'umi';
import images from '@/assets/images';
import { useEffect } from 'react';
import { effect, useConnect, useLoading } from '@/utils/dva17';
import { EGet, EGetOne, EIds, EYearOpt, NHighlights } from '@/common/action';
import dayjs from 'dayjs';
import { Row, Col, Spin, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import ShareMenu from '@/components/ShareMenu';
import FilterYear from '@/components/FilterYear';
import { chineseConversion, chineseConvertRichText } from '@/utils/trans';

export default (props: any) => {
  const intl = useIntl();
  const locale = getLocale();
  const {
    query,
    query: { id, currentYear },
  } = props?.location;
  const { highlightsDetails, highlightsList, yearOpt, allIds } =
    useConnect(NHighlights);
  const detailsLoading = useLoading(NHighlights, EGetOne).loading;
  const listLoading = useLoading(NHighlights, EGet).loading;
  useEffect(() => {
    window.scrollTo(0, 0);
    effect(NHighlights, EYearOpt);
    effect(NHighlights, EIds);
  }, []);
  useEffect(() => {
    if (yearOpt && yearOpt.length !== 0 && !currentYear) {
      history.push({ query: { ...query, currentYear: yearOpt[0].date } });
    }
  }, [yearOpt]);
  useEffect(() => {
    if (currentYear) {
      effect(NHighlights, EGet, {
        page: 1,
        pageSize: 10,
        releaseTime: currentYear,
      });
    }
  }, [currentYear]);
  useEffect(() => {
    if (id) {
      effect(NHighlights, EGetOne, { id });
    }
  }, [id]);
  useEffect(() => {
    if (highlightsList && highlightsList.rows.length !== 0 && !id) {
      history.push({ query: { ...query, id: highlightsList.rows[0].id } });
    }
  }, [highlightsList]);
  const onPagination = (type: number) => {
    const index = allIds.indexOf(id);
    if (type === 1 && index !== allIds.length - 1) {
      history.push({ query: { id: allIds[index + 1] } });
    }
    if (!type && index !== 0) {
      history.push({ query: { id: allIds[index - 1] } });
    }
  };
  return (
    <div className={styles.highlights_contain}>
      {/* <ShareMenu linkUrl={window.location.href} /> */}
      <FilterYear
        intl={intl}
        yearOpt={yearOpt}
        currentYear={currentYear}
        setCurrentYear={(payload: any) => {
          history.push({ query: { ...query, currentYear: payload } });
        }}
      />
      <Row className={styles.column_info}>
        <Col
          xxl={17}
          xl={17}
          lg={17}
          md={15}
          sm={24}
          xs={24}
          className={styles.column_info_left}
        >
          <Spin spinning={detailsLoading}>
            <div className={styles.news_title}>
              {locale === 'en-US'
                ? highlightsDetails?.zhTitle
                : chineseConversion(highlightsDetails?.title)}
            </div>
            <div className={styles.news_date}>
              {highlightsDetails &&
                highlightsDetails.releaseTime &&
                dayjs(highlightsDetails?.releaseTime).format('YYYY/MM/DD')}
            </div>
            <div
              className={[styles.dangerouslyHtml].join(' ')}
              dangerouslySetInnerHTML={{
                __html:
                  highlightsDetails?.content &&
                  (locale === 'en-US'
                    ? highlightsDetails?.zhContent
                    : chineseConvertRichText(highlightsDetails?.content)),
              }}
            />
            {/* <div className={styles.pagination}>
              <div
                className={[
                  styles.pagination_btn,
                  styles.prev_btn,
                  id === allIds[0] ? styles.disabled_btn : '',
                ].join(' ')}
                onClick={() => {
                  onPagination(0);
                }}
              >
                <img
                  className={styles.pagination_btn_icon}
                  src={images.iconLeftArrow}
                />
                <span>
                  {intl.formatMessage({ id: 'pages.news.pagination.previous' })}
                </span>
              </div>
              <div
                className={[
                  styles.pagination_btn,
                  styles.next_btn,
                  id === allIds[allIds.length - 1] ? styles.disabled_btn : '',
                ].join(' ')}
                onClick={() => {
                  onPagination(1);
                }}
              >
                <span>
                  {intl.formatMessage({ id: 'pages.news.pagination.next' })}
                </span>
                <img
                  className={styles.pagination_btn_icon}
                  src={images.iconRightArrow}
                />
              </div>
            </div> */}
          </Spin>
        </Col>
        <Col
          xxl={7}
          xl={7}
          lg={7}
          md={9}
          sm={24}
          xs={24}
          className={styles.column_info_right}
        >
          <Spin spinning={listLoading}>
            <div id="scrollableDiv" className={styles.right_list_scroll}>
              <InfiniteScroll
                dataLength={highlightsList?.pagination?.pageSize || 0}
                loader={<h4>Loading...</h4>}
                // endMessage={<Divider plain>It is all, nothing more</Divider>}
                scrollableTarget="scrollableDiv"
                hasMore={
                  highlightsList &&
                  highlightsList?.pagination?.page <
                    highlightsList?.pagination?.pageCount
                }
                next={() => {
                  const { page, pageSize } = highlightsList.pagination;
                  effect(NHighlights, EGet, {
                    page: page + 1,
                    pageSize,
                    releaseTime: currentYear,
                  });
                }}
              >
                {highlightsList?.rows?.map((vo: any) => {
                  return (
                    <div key={vo.id} className={styles.info_right_item}>
                      <img
                        src={vo.miniImage}
                        className={styles.summaryPicture}
                      />
                      <div className={styles.summary}>
                        <span
                          className={[
                            styles.summary_time,
                            id && Number(id) === vo.id
                              ? styles.summary_time_active
                              : '',
                          ].join(' ')}
                        >
                          {vo.releaseTime &&
                            dayjs(vo.releaseTime).format('MM/DD')}
                        </span>
                        <a
                          className={styles.summary_title}
                          href={`#/highlights?id=${vo.id}&currentYear=${currentYear}`}
                          onClick={() => {
                            history.push({ query: { ...query, id: vo.id } });
                          }}
                        >
                          {locale === 'en-US'
                            ? vo.zhTitle
                            : chineseConversion(vo.title)}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </InfiniteScroll>
            </div>
          </Spin>
        </Col>
      </Row>
    </div>
  );
};
