import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'package:mobile/presentation/screens/portfolio_page.dart';
import 'package:mobile/presentation/screens/signals_page.dart';
import 'package:mobile/presentation/screens/risk_page.dart';
import 'package:mobile/presentation/screens/options_page.dart';
import 'package:mobile/presentation/screens/settings_page.dart';

void main() {
  runApp(const ProviderScope(child: NeuroQuantApp()));
}

class NeuroQuantApp extends StatelessWidget {
  const NeuroQuantApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NeuroQuant India',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: const Color(0xFF0F172A),
        scaffoldBackgroundColor: const Color(0xFF0F172A),
        textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF2DD4BF),
          brightness: Brightness.dark,
        ),
      ),
      home: const MainScaffold(),
    );
  }
}

class MainScaffold extends StatefulWidget {
  const MainScaffold({super.key});

  @override
  State<MainScaffold> createState() => _MainScaffoldState();
}

class _MainScaffoldState extends State<MainScaffold> {
  int _selectedIndex = 0;

  final List<Widget> _pages = [
    const DashboardPage(),
    const PortfolioPage(),
    const SignalsPage(),
    const OptionsPage(),
    const RiskPage(),
    const SettingsPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(index: _selectedIndex, children: _pages),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (index) => setState(() => _selectedIndex = index),
        type: BottomNavigationBarType.fixed,
        backgroundColor: const Color(0xFF1E293B),
        selectedItemColor: const Color(0xFF2DD4BF),
        unselectedItemColor: Colors.grey,
        selectedFontSize: 10,
        unselectedFontSize: 10,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(LucideIcons.layoutDashboard, size: 20),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(LucideIcons.briefcase, size: 20),
            label: 'Portfolio',
          ),
          BottomNavigationBarItem(
            icon: Icon(LucideIcons.zap, size: 20),
            label: 'Signals',
          ),
          BottomNavigationBarItem(
            icon: Icon(LucideIcons.barChart2, size: 20),
            label: 'Options',
          ),
          BottomNavigationBarItem(
            icon: Icon(LucideIcons.shieldAlert, size: 20),
            label: 'Risk',
          ),
          BottomNavigationBarItem(
            icon: Icon(LucideIcons.settings, size: 20),
            label: 'Settings',
          ),
        ],
      ),
    );
  }
}

class DashboardPage extends StatelessWidget {
  const DashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        SliverAppBar(
          expandedHeight: 120.0,
          floating: false,
          pinned: true,
          flexibleSpace: FlexibleSpaceBar(
            title: Text(
              'NEUROQUANT INDIA',
              style: GoogleFonts.montserrat(
                fontWeight: FontWeight.bold,
                fontSize: 16,
              ),
            ),
            background: Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF0F172A), Color(0xFF1E293B)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
              ),
            ),
          ),
        ),
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildMarketOverview(),
                const SizedBox(height: 24),
                _buildHeader('AI Intelligence'),
                const SizedBox(height: 12),
                _buildSignalCard(),
                const SizedBox(height: 24),
                _buildHeader('Risk Metrics'),
                const SizedBox(height: 12),
                _buildRiskGrid(),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildHeader(String title) {
    return Text(
      title,
      style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
    );
  }

  Widget _buildMarketOverview() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white10),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _buildMetric('NIFTY 50', '21,853.80', '+0.45%', Colors.greenAccent),
          _buildMetric('INDIA VIX', '15.42', '-1.2%', Colors.greenAccent),
        ],
      ),
    );
  }

  Widget _buildMetric(String label, String value, String change, Color color) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: const TextStyle(color: Colors.grey, fontSize: 12)),
        const SizedBox(height: 4),
        Text(
          value,
          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 4),
        Text(
          change,
          style: TextStyle(color: color, fontWeight: FontWeight.w600),
        ),
      ],
    );
  }

  Widget _buildSignalCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            const Color(0xFF2DD4BF).withOpacity(0.1),
            Colors.transparent,
          ],
        ),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF2DD4BF).withOpacity(0.3)),
      ),
      child: Column(
        children: [
          const Row(
            children: [
              Icon(LucideIcons.zap, color: Color(0xFF2DD4BF)),
              SizedBox(width: 8),
              Text(
                'TOP AI SIGNAL',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Spacer(),
              Text(
                'RELIANCE',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.blueAccent,
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          const Text(
            'Strong bullish divergence detected in Options OI + Sentiment.',
            style: TextStyle(color: Colors.white70),
          ),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF2DD4BF),
              foregroundColor: Colors.black,
              minimumSize: const Size(double.infinity, 45),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8),
              ),
            ),
            child: const Text('View Insights'),
          ),
        ],
      ),
    );
  }

  Widget _buildRiskGrid() {
    return Row(
      children: [
        Expanded(
          child: _buildRiskCard('Regime', 'Expanding Bull', Colors.tealAccent),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: _buildRiskCard('Crash Prob', '4.2%', Colors.orangeAccent),
        ),
      ],
    );
  }

  Widget _buildRiskCard(String label, String value, Color color) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(color: Colors.grey, fontSize: 12)),
          const SizedBox(height: 8),
          Text(
            value,
            style: TextStyle(
              color: color,
              fontWeight: FontWeight.bold,
              fontSize: 16,
            ),
          ),
        ],
      ),
    );
  }
}
