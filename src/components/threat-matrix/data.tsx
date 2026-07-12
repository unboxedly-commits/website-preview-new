import React from 'react';
import { Shield, Terminal, Zap, Lock, Eye, Crosshair, Cpu, Database, Activity, Globe, Users, Server, BarChart, Code, ShieldAlert } from 'lucide-react';

export const VULNERABILITIES = [
  {
    id: 'missed_calls',
    title: 'The 2 AM Missed Call',
    description: 'You can\'t answer the phone while sleeping or on a job. Leads call your competitor instead.',
    icon: <Terminal className="w-6 h-6" />,
    countermeasure: {
      title: '24/7 Voice & Text AI',
      description: 'Answers instantly and books the job while you sleep.',
      metrics: ['< 5s Response Time', '100% Call Capture'],
      icon: <Zap className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'tire_kickers',
    title: 'The Tire-Kicker Tax',
    description: 'Wasting hours texting unqualified leads who never buy.',
    icon: <Users className="w-6 h-6" />,
    countermeasure: {
      title: 'Automated Lead Qualification',
      description: 'AI vets leads before they reach your calendar.',
      metrics: ['0 Wasted Hours', 'Only Qualified Leads'],
      icon: <Shield className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'ghosting',
    title: 'The Ghosting Epidemic',
    description: 'Leads book but never show up, costing you a valuable time slot.',
    icon: <Eye className="w-6 h-6" />,
    countermeasure: {
      title: 'Aggressive Follow-up Protocol',
      description: 'Automated SMS reminders and intelligent rescheduling.',
      metrics: ['-60% No-Shows', 'Auto-Rescheduling'],
      icon: <Crosshair className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'slow_response',
    title: 'The Slow Response Penalty',
    description: 'Wait 10 minutes to reply, and the lead is gone to a competitor.',
    icon: <Activity className="w-6 h-6" />,
    countermeasure: {
      title: 'Instant SMS Engagement',
      description: 'The AI texts them back immediately after they submit a form.',
      metrics: ['0s Delay', 'Higher Close Rate'],
      icon: <Zap className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'leaky_ads',
    title: 'Leaky Ad Spend',
    description: 'Paying for clicks but your website doesn\'t convert traffic into leads.',
    icon: <BarChart className="w-6 h-6" />,
    countermeasure: {
      title: 'High-Converting Funnels',
      description: 'Websites engineered specifically to turn clicks into booked appointments.',
      metrics: ['Maximized ROI', 'Higher Conversion'],
      icon: <Activity className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'admin_overload',
    title: 'Admin Overload',
    description: 'Drowning in manual data entry and copying leads to your CRM.',
    icon: <Database className="w-6 h-6" />,
    countermeasure: {
      title: 'Seamless CRM Sync',
      description: 'Leads and appointments are instantly pushed to your tools.',
      metrics: ['0 Data Entry', 'Instant Sync'],
      icon: <Cpu className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'expensive_staff',
    title: 'Expensive Human Support',
    description: 'Paying receptionists $20/hr just to answer basic FAQ questions.',
    icon: <Server className="w-6 h-6" />,
    countermeasure: {
      title: 'Autonomous Support Agents',
      description: 'AI handles pricing, hours, and basic questions automatically.',
      metrics: ['0 Sick Days', '$0 Hourly Rate'],
      icon: <Cpu className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'scattered_comms',
    title: 'Scattered Communications',
    description: 'Losing track of conversations across email, text, and social media.',
    icon: <Globe className="w-6 h-6" />,
    countermeasure: {
      title: 'Unified Inbox',
      description: 'All customer conversations aggregated into a single dashboard.',
      metrics: ['0 Lost Messages', 'Centralized Hub'],
      icon: <Globe className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'lost_reviews',
    title: 'Missing Out On Reviews',
    description: 'Happy customers forget to leave reviews, hurting your local SEO.',
    icon: <Users className="w-6 h-6" />,
    countermeasure: {
      title: 'Automated Review Requests',
      description: 'The AI texts customers after a successful job to ask for a review.',
      metrics: ['+300% 5-Star Reviews', 'Better SEO'],
      icon: <Crosshair className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'stale_website',
    title: 'The Digital Business Card',
    description: 'Your website is just a brochure that does nothing to sell your services.',
    icon: <Globe className="w-6 h-6" />,
    countermeasure: {
      title: 'Interactive AI Experience',
      description: 'Dynamic, engaging interfaces that guide the user to book.',
      metrics: ['Dynamic UI', 'Higher Engagement'],
      icon: <Globe className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'weekend_blackout',
    title: 'The Weekend Blackout',
    description: 'Your business is effectively closed on weekends when leads are browsing.',
    icon: <Activity className="w-6 h-6" />,
    countermeasure: {
      title: '24/7/365 Coverage',
      description: 'AI never sleeps, takes holidays, or goes on vacation.',
      metrics: ['100% Uptime', 'Weekend Bookings'],
      icon: <Zap className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'unqualified_quotes',
    title: 'Unqualified Quotes',
    description: 'Driving across town to give a quote to someone who has no budget.',
    icon: <Eye className="w-6 h-6" />,
    countermeasure: {
      title: 'AI Price Estimator',
      description: 'AI gives rough estimates based on user input to pre-qualify them.',
      metrics: ['Saves Gas Money', 'Pre-qualified Leads'],
      icon: <Shield className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'inconsistent_brand',
    title: 'Inconsistent Messaging',
    description: 'Staff gives different answers to the same questions.',
    icon: <Code className="w-6 h-6" />,
    countermeasure: {
      title: 'Centralized Brain',
      description: 'AI always gives the exact, approved answer based on your rules.',
      metrics: ['100% Consistency', 'Perfect Recall'],
      icon: <Shield className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'double_booking',
    title: 'Double Booking Nightmares',
    description: 'Manual scheduling errors lead to angry customers.',
    icon: <Server className="w-6 h-6" />,
    countermeasure: {
      title: 'Real-Time Calendar Sync',
      description: 'AI checks your live availability before confirming any slot.',
      metrics: ['0 Double Bookings', 'Flawless Scheduling'],
      icon: <Terminal className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'lost_upsells',
    title: 'Leaving Money on the Table',
    description: 'Forgetting to mention add-ons or upsells during the booking process.',
    icon: <Activity className="w-6 h-6" />,
    countermeasure: {
      title: 'Smart Upsell Engine',
      description: 'AI naturally suggests related services while booking.',
      metrics: ['Higher Ticket Size', 'Automated Upsells'],
      icon: <Cpu className="w-6 h-6 currentColor" />
    }
  }
];
