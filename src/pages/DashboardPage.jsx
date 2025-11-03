import { StatWidget, TaskList } from '../components/dashboard';
import { Card } from '../components/common';
import { mockDashboardData } from '../lib/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AuctionLineIcon from 'remixicon-react/AuctionLineIcon';
import BroadcastLineIcon from 'remixicon-react/BroadcastLineIcon';
import StackLineIcon from 'remixicon-react/StackLineIcon';
import AlertLineIcon from 'remixicon-react/AlertLineIcon';
import GroupLineIcon from 'remixicon-react/GroupLineIcon';

/**
 * DashboardPage - Main dashboard view with KPIs, charts, and tasks
 */
const DashboardPage = () => {
  const iconMap = {
    auction: AuctionLineIcon,
    broadcast: BroadcastLineIcon,
    building: StackLineIcon,
    alert: AlertLineIcon,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 
          className="font-bold"
          style={{
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '28px',
            letterSpacing: '-0.03em',
            color: 'rgba(26, 26, 26, 1)'
          }}
        >
          Dashboard
        </h1>
        <p 
          className="mt-1"
          style={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.03em',
            color: 'rgba(87, 87, 87, 1)'
          }}
        >
          Welcome back! Here's an overview of your platform activity.
        </p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockDashboardData.kpis.map((kpi) => (
          <StatWidget
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            icon={iconMap[kpi.icon]}
            iconBgColor={kpi.iconBgColor}
            iconColor={kpi.iconColor}
            valueByPeriod={kpi.valueByPeriod}
          />
        ))}
      </div>

      {/* Charts and Tasks Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section - Spans 2 columns */}
        <div className="lg:col-span-2">
          <Card className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Auction Activity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockDashboardData.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#073370" name="Completed Auctions" />
                <Bar dataKey="active" fill="#10b981" name="Active Auctions" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Tasks Section - Spans 1 column */}
        <div className="lg:col-span-1">
          <TaskList title="Recent Alerts & Tasks" items={mockDashboardData.tasks} />
        </div>
      </div>

      {/* Quick Stats Section */}
      <div>
        {/* Heading Outside Card */}
        <h2 
          className="mb-4"
          style={{
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '28px',
            letterSpacing: '-0.03em',
            color: 'rgba(26, 26, 26, 1)'
          }}
        >
          Quick Stats
        </h2>
        
        {/* Card with 3 Divisions */}
        <div 
          className="bg-white rounded-lg border w-full max-w-full"
          style={{
            height: '123px',
            borderRadius: '8px',
            borderWidth: '1px',
            padding: '12px',
            borderColor: 'rgba(229, 229, 229, 1)',
            boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0'
          }}
        >
          {/* Division 1: Auction Success Rate */}
          <div 
            style={{
              height: '99px',
              gap: '4px',
              display: 'flex',
              flexDirection: 'column',
              paddingRight: '12px',
              borderRight: '1px solid rgba(229, 229, 229, 1)'
            }}
          >
            <div className="flex items-center" style={{ gap: '4px' }}>
              <div 
                className="p-1 rounded-lg"
                style={{
                  backgroundColor: 'transparent',
                  color: '#073370'
                }}
              >
                <AuctionLineIcon style={{ width: '20px', height: '20px' }} />
              </div>
              <p 
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.03em',
                  color: 'rgba(87, 87, 87, 1)'
                }}
              >
                Auction Success Rate
              </p>
            </div>
            <div 
              style={{
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '110%',
                letterSpacing: '-0.03em',
                color: 'rgba(26, 26, 26, 1)',
                marginTop: '8px'
              }}
            >
              89%
            </div>
            <div 
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.03em',
                color: 'rgba(87, 87, 87, 1)',
                marginTop: '4px'
              }}
            >
              19 Monday - 26 Sunday
            </div>
          </div>

          {/* Division 2: Total Revenue */}
          <div 
            style={{
              height: '99px',
              gap: '4px',
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderRight: '1px solid rgba(229, 229, 229, 1)'
            }}
          >
            <div className="flex items-center" style={{ gap: '4px' }}>
              <div 
                className="p-1 rounded-lg"
                style={{
                  backgroundColor: 'transparent',
                  color: '#073370'
                }}
              >
                <Building2LineIcon style={{ width: '20px', height: '20px' }} />
              </div>
              <p 
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.03em',
                  color: 'rgba(87, 87, 87, 1)'
                }}
              >
                Total Revenue
              </p>
            </div>
            <div 
              style={{
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '110%',
                letterSpacing: '-0.03em',
                color: 'rgba(26, 26, 26, 1)',
                marginTop: '8px'
              }}
            >
              ₹24,00,000
            </div>
            <div 
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.03em',
                color: 'rgba(87, 87, 87, 1)',
                marginTop: '4px'
              }}
            >
              19 Monday - 26 Sunday
            </div>
          </div>

          {/* Division 3: Active Bidders */}
          <div 
            style={{
              height: '99px',
              gap: '4px',
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '12px'
            }}
          >
            <div className="flex items-center" style={{ gap: '4px' }}>
              <div 
                className="p-1 rounded-lg"
                style={{
                  backgroundColor: 'transparent',
                  color: '#073370'
                }}
              >
                <GroupLineIcon style={{ width: '20px', height: '20px' }} />
              </div>
              <p 
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.03em',
                  color: 'rgba(87, 87, 87, 1)'
                }}
              >
                Active Bidders
              </p>
            </div>
            <div 
              style={{
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '110%',
                letterSpacing: '-0.03em',
                color: 'rgba(26, 26, 26, 1)',
                marginTop: '8px'
              }}
            >
              156
            </div>
            <div 
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.03em',
                color: 'rgba(87, 87, 87, 1)',
                marginTop: '4px'
              }}
            >
              19 Monday - 26 Sunday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

