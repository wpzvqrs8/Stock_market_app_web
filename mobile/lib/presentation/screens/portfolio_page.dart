import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'package:fl_chart/fl_chart.dart';

class PortfolioPage extends StatelessWidget {
  const PortfolioPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'PORTFOLIO',
          style: GoogleFonts.montserrat(
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),
        backgroundColor: Colors.transparent,
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(LucideIcons.refreshCw, size: 20),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildTotalValue(),
            const SizedBox(height: 24),
            _buildAllocationSection(),
            const SizedBox(height: 24),
            const Text(
              'Holdings',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 12),
            _buildHoldingsList(),
          ],
        ),
      ),
    );
  }

  Widget _buildTotalValue() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'CURRENT VALUE',
            style: TextStyle(
              color: Colors.grey,
              fontSize: 10,
              fontWeight: FontWeight.bold,
              letterSpacing: 1.2,
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            '₹12,45,280.00',
            style: TextStyle(
              fontSize: 32,
              fontStyle: FontStyle.normal,
              fontWeight: FontWeight.w900,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              const Icon(
                LucideIcons.trendingUp,
                size: 16,
                color: Color(0xFF2DD4BF),
              ),
              const SizedBox(width: 4),
              const Text(
                '+1.2%',
                style: TextStyle(
                  color: Color(0xFF2DD4BF),
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(width: 8),
              Text(
                '(₹14,920.00 today)',
                style: TextStyle(color: Colors.grey[400], fontSize: 12),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildAllocationSection() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B).withOpacity(0.5),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white10),
      ),
      child: Column(
        children: [
          const Row(
            children: [
              Icon(LucideIcons.pieChart, size: 18, color: Color(0xFF2DD4BF)),
              SizedBox(width: 8),
              Text(
                'Asset Allocation',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ],
          ),
          const SizedBox(height: 24),
          SizedBox(
            height: 150,
            child: PieChart(
              PieChartData(
                sectionsSpace: 4,
                centerSpaceRadius: 40,
                sections: [
                  PieChartSectionData(
                    value: 35,
                    color: const Color(0xFF2DD4BF),
                    radius: 15,
                    showTitle: false,
                  ),
                  PieChartSectionData(
                    value: 25,
                    color: Colors.blueAccent,
                    radius: 15,
                    showTitle: false,
                  ),
                  PieChartSectionData(
                    value: 15,
                    color: Colors.amberAccent,
                    radius: 15,
                    showTitle: false,
                  ),
                  PieChartSectionData(
                    value: 15,
                    color: Colors.redAccent,
                    radius: 15,
                    showTitle: false,
                  ),
                  PieChartSectionData(
                    value: 10,
                    color: Colors.indigoAccent,
                    radius: 15,
                    showTitle: false,
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),
          _buildLegend(),
        ],
      ),
    );
  }

  Widget _buildLegend() {
    final items = [
      {'label': 'Reliance', 'color': const Color(0xFF2DD4BF)},
      {'label': 'HDFC Bank', 'color': Colors.blueAccent},
      {'label': 'TCS', 'color': Colors.amberAccent},
      {'label': 'Others', 'color': Colors.redAccent},
    ];
    return Wrap(
      spacing: 16,
      runSpacing: 8,
      children: items
          .map(
            (e) => Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: 8,
                  height: 8,
                  decoration: BoxDecoration(
                    color: e['color'] as Color,
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 4),
                Text(
                  e['label'] as String,
                  style: const TextStyle(fontSize: 10, color: Colors.grey),
                ),
              ],
            ),
          )
          .toList(),
    );
  }

  Widget _buildHoldingsList() {
    final holdings = [
      {'symbol': 'RELIANCE', 'qty': '45', 'pnl': '+21.6%', 'val': '₹1,34,109'},
      {
        'symbol': 'HDFCBANK',
        'qty': '120',
        'pnl': '-10.46%',
        'val': '₹1,74,048',
      },
      {'symbol': 'TCS', 'qty': '25', 'pnl': '+8.43%', 'val': '₹1,03,012'},
    ];

    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: holdings.length,
      separatorBuilder: (context, index) => const SizedBox(height: 12),
      itemBuilder: (context, index) {
        final item = holdings[index];
        final isPositive = item['pnl']!.startsWith('+');
        return Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: const Color(0xFF1E293B),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: Colors.white10),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    item['symbol']!,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                  Text(
                    'Qty: ${item['qty']}',
                    style: const TextStyle(color: Colors.grey, fontSize: 12),
                  ),
                ],
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    item['val']!,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text(
                    item['pnl']!,
                    style: TextStyle(
                      color: isPositive ? Colors.greenAccent : Colors.redAccent,
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }
}
