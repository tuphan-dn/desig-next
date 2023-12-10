'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import FeatureCard from './featureCard'

import SWAP from 'static/images/wallet/feature/swap.png'
import STAKING from 'static/images/wallet/feature/staking.png'
import CASHFLOW from 'static/images/wallet/feature/cashflow.png'
import CHATTING from 'static/images/wallet/feature/chatting.png'

const LIST_FEATURE = [
  {
    title: 'Intel-driven Swap',
    desc: 'Receive instant updates on your financial activities and market changes, keeping you in the know at all times.',
    img: SWAP,
  },
  {
    title: 'Staking Aggregator',
    desc: 'Maximize your staking potential with Desig&apos;s all-in-one aggregator. Simplify your investment and tracking of platforms and validators.',
    img: STAKING,
  },
  {
    title: 'Cashflow Management',
    desc: 'Track, allocate, and analyze cash flows with intuitive, customizable reports. Customize categories with period-specific, chain-based financial analysis, and overview YoY growth reports featuring interactive charts.',
    img: CASHFLOW,
  },
  {
    title: 'In-app Chatting',
    desc: 'Connect with fellow users effortlessly through in-app chat. Discuss strategies, share insights, and stay informed.',
    img: CHATTING,
  },
]

export default function MoreFeature() {
  return (
    <MaxWidthLayout>
      <Row gutter={[0, 80]} justify="start">
        <Col span={20}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Typography.Title level={2}>
                And more features...
              </Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]} wrap={false}>
            {LIST_FEATURE.map(({ title, desc, img }) => (
              <Col key={title}>
                <FeatureCard title={title} desc={desc} img={img} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}