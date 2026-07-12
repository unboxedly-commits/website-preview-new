import React from 'react';
import { Shield, Terminal, Zap, Lock, Eye, Crosshair, Cpu, Database, Activity, Globe, Users, Server, BarChart, Code, ShieldAlert } from 'lucide-react';

export const VULNERABILITIES = [
  {
    id: 'manual_burden',
    title: 'Manual Content Burden',
    description: 'Human fatigue scaling bottlenecks.',
    icon: <Terminal className="w-6 h-6" />,
    countermeasure: {
      title: 'ZevenBots AI Copywriting',
      description: 'Autonomous generation of high-converting content at 1000x human speed.',
      metrics: ['+900% Output', '-99% Cost'],
      icon: <Zap className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'post_launch_ghosting',
    title: 'Post-Launch Ghosting',
    description: 'Zero support after deployment.',
    icon: <Eye className="w-6 h-6" />,
    countermeasure: {
      title: '24/7 Uptime Monitoring',
      description: 'Relentless autonomous oversight ensuring your systems never sleep.',
      metrics: ['99.99% Uptime', '<50ms Ping'],
      icon: <Crosshair className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'hostage_infra',
    title: 'Hostage Infrastructure',
    description: 'Vendor lock-in and restricted access.',
    icon: <Lock className="w-6 h-6" />,
    countermeasure: {
      title: '100% Decentralized Ownership',
      description: 'Absolute control over your codebase and deployment environments.',
      metrics: ['No Lock-in', 'Full Root Access'],
      icon: <Shield className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'slow_response',
    title: 'Slow Response Times',
    description: 'Delayed support causing lost conversions.',
    icon: <Activity className="w-6 h-6" />,
    countermeasure: {
      title: 'Autonomous Support Agents',
      description: 'Instant, intelligent replies resolving issues before human agents even wake up.',
      metrics: ['0s Latency', '100% Resolution'],
      icon: <Cpu className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'security_flaws',
    title: 'Predictable Security Flaws',
    description: 'Vulnerable to zero-day and automated attacks.',
    icon: <ShieldAlert className="w-6 h-6" />,
    countermeasure: {
      title: 'Predictive Threat Detection',
      description: 'AI-driven heuristic scanning that patches vulnerabilities in real-time.',
      metrics: ['0-Day Prevention', 'Auto-Patching'],
      icon: <Lock className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'wasted_ad_spend',
    title: 'Wasted Ad Spend',
    description: 'Inefficient bidding and poor targeting.',
    icon: <BarChart className="w-6 h-6" />,
    countermeasure: {
      title: 'AI-Optimized Dynamic Bidding',
      description: 'Micro-second adjustments reallocating budget to highest ROI channels continuously.',
      metrics: ['Maximized ROI', 'Zero Waste'],
      icon: <Zap className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'generic_ux',
    title: 'Generic User Experiences',
    description: 'Static interfaces that fail to engage users.',
    icon: <Users className="w-6 h-6" />,
    countermeasure: {
      title: 'Real-Time Hyper-Personalization',
      description: 'Dynamically generated 1-to-1 tailored interfaces based on real-time behavior.',
      metrics: ['+300% Engagement', 'Dynamic UI'],
      icon: <Eye className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'op_bottlenecks',
    title: 'Operational Bottlenecks',
    description: 'Manual handoffs slowing down workflows.',
    icon: <Server className="w-6 h-6" />,
    countermeasure: {
      title: 'Automated Workflow Orchestration',
      description: 'Seamless API integrations handling complex tasks with zero human intervention.',
      metrics: ['Infinite Scaling', '0 Human Dependency'],
      icon: <Cpu className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'data_silos',
    title: 'Isolated Data Silos',
    description: 'Fragmented insights across platforms.',
    icon: <Database className="w-6 h-6" />,
    countermeasure: {
      title: 'Unified Neural Data Lake',
      description: 'Cross-platform intelligence aggregation with instant retrieval and synthesis.',
      metrics: ['Global Sync', 'Instant Query'],
      icon: <Database className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'stale_intel',
    title: 'Stale Market Intelligence',
    description: 'Reacting to trends instead of predicting them.',
    icon: <Globe className="w-6 h-6" />,
    countermeasure: {
      title: 'Real-Time Competitor Analysis',
      description: 'Continuous web scraping and sentiment analysis for strategic dominance.',
      metrics: ['Strategic Foresight', 'Market Lead'],
      icon: <Globe className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'high_churn',
    title: 'High Customer Churn',
    description: 'Failing to identify at-risk users early.',
    icon: <Users className="w-6 h-6" />,
    countermeasure: {
      title: 'Predictive Retention Modeling',
      description: 'Automated interventions triggering loyalty loops before users even consider leaving.',
      metrics: ['-80% Churn', 'Proactive Saves'],
      icon: <Crosshair className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'unscalable_onboarding',
    title: 'Unscalable Onboarding',
    description: 'High friction causing early drop-offs.',
    icon: <Activity className="w-6 h-6" />,
    countermeasure: {
      title: 'Frictionless AI Onboarding',
      description: 'Interactive, personalized walkthroughs delivering instant time-to-value.',
      metrics: ['0 Drop-off', 'Instant TTV'],
      icon: <Zap className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'inconsistent_brand',
    title: 'Inconsistent Branding',
    description: 'Scattered assets and off-brand outputs.',
    icon: <Eye className="w-6 h-6" />,
    countermeasure: {
      title: 'Centralized Brand Enforcer',
      description: 'AI-governed asset generation ensuring 100% compliance across all touchpoints.',
      metrics: ['100% Compliance', 'Auto Formatting'],
      icon: <Shield className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'expensive_qa',
    title: 'Expensive QA Testing',
    description: 'Slow manual testing cycles and regressions.',
    icon: <Code className="w-6 h-6" />,
    countermeasure: {
      title: 'Autonomous QA & Validation',
      description: 'Continuous integration running millions of automated tests in sub-seconds.',
      metrics: ['Zero Regressions', 'Sub-second Validation'],
      icon: <Terminal className="w-6 h-6 currentColor" />
    }
  },
  {
    id: 'human_error',
    title: 'Human Error in Deployments',
    description: 'Manual deploy mistakes taking down production.',
    icon: <Server className="w-6 h-6" />,
    countermeasure: {
      title: 'Zero-Touch CI/CD Pipelines',
      description: 'Flawless code delivery with automated canary rollouts and instant rollbacks.',
      metrics: ['Flawless Delivery', 'Self-Healing'],
      icon: <Cpu className="w-6 h-6 currentColor" />
    }
  }
];
