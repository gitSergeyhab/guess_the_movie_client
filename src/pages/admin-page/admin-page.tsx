import { Breadcrumb, Layout, theme } from 'antd';




export function AdminPage () {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout >

      <Layout>
        <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div>
        </div>
      </Layout>
    </Layout>
  );
}
