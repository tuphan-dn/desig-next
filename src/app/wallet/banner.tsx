'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import BANNER from 'static/images/wallet/banner.png'

export default function Banner() {
  const router = useRouter()
  return (
    <MaxWidthLayout>
      <Row
        className="item-responsive"
        gutter={[0, 16]}
        align="middle"
        justify="space-between"
      >
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Space direction="vertical">
                <Typography.Title level={1}>Transcend your </Typography.Title>
                <Typography.Title level={1}>co-ownership </Typography.Title>
                <Typography.Title level={1}>wallet limits</Typography.Title>
              </Space>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary" className="description">
                Unleash your team&apos;s financial dominance on omni-chain.
              </Typography.Text>
            </Col>
            <Col span={24} style={{ marginTop: 28 }}>
              <Button
                size="large"
                className="banner-btn-access ant-btn-primary"
                icon={<IonIcon name="key-outline" />}
                onClick={() => router.push('/install-app')}
              >
                Get Early Access
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Image
            style={{ width: '100%', height: '100%' }}
            alt="wallet"
            src={BANNER}
          />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}