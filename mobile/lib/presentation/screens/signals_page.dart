import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lucide_icons/lucide_icons.dart';

class SignalsPage extends StatelessWidget {
  const SignalsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'AI SIGNALS',
          style: GoogleFonts.montserrat(
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),
        backgroundColor: Colors.transparent,
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(LucideIcons.filter, size: 20),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            _buildTopSignal(),
            const SizedBox(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'Recent Signals',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                TextButton(
                  onPressed: () {},
                  child: const Text(
                    'View All',
                    style: TextStyle(color: Color(0xFF2DD4BF)),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            _buildSignalList(),
          ],
        ),
      ),
    );
  }

  Widget _buildTopSignal() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            const Color(0xFF2DD4BF).withOpacity(0.15),
            const Color(0xFF1E293B),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: const Color(0xFF2DD4BF).withOpacity(0.3)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 10,
                  vertical: 4,
                ),
                decoration: BoxDecoration(
                  color: const Color(0xFF2DD4BF).withOpacity(0.2),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: const Text(
                  'TOP PICK',
                  style: TextStyle(
                    color: Color(0xFF2DD4BF),
                    fontSize: 10,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              const Spacer(),
              const Icon(LucideIcons.zap, color: Color(0xFF2DD4BF), size: 18),
            ],
          ),
          const SizedBox(height: 16),
          const Text(
            'RELIANCE',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900),
          ),
          const Text(
            'STRONG BUY',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Color(0xFF2DD4BF),
            ),
          ),
          const SizedBox(height: 16),
          const Text(
            'Institutional divergence detected in Options OI + Sentiment. 3000 strike seeing massive build-up.',
            style: TextStyle(color: Colors.white70, fontSize: 14, height: 1.5),
          ),
          const SizedBox(height: 24),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              _buildConfidenceMeter(94),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  const Text(
                    'Target: ₹3,150',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text(
                    'SL: ₹2,890',
                    style: TextStyle(color: Colors.grey, fontSize: 12),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildConfidenceMeter(int value) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '$value%',
          style: const TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.w900,
            color: Color(0xFF2DD4BF),
          ),
        ),
        const Text(
          'CONFIDENCE',
          style: TextStyle(
            color: Colors.grey,
            fontSize: 10,
            fontWeight: FontWeight.bold,
          ),
        ),
      ],
    );
  }

  Widget _buildSignalList() {
    final signals = [
      {'s': 'HDFCBANK', 't': 'Accumulate', 'c': '82%', 'sent': 'Bullish'},
      {'s': 'TCS', 't': 'Hold', 'c': '65%', 'sent': 'Neutral'},
      {'s': 'AXISBANK', 't': 'Sell', 'c': '78%', 'sent': 'Bearish'},
    ];

    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: signals.length,
      separatorBuilder: (context, index) => const SizedBox(height: 12),
      itemBuilder: (context, index) {
        final signal = signals[index];
        final isSell = signal['t'] == 'Sell';
        return Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: const Color(0xFF1E293B),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: Colors.white10),
          ),
          child: Row(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  color: const Color(0xFF0F172A),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(
                  isSell ? LucideIcons.trendingDown : LucideIcons.trendingUp,
                  color: isSell ? Colors.redAccent : const Color(0xFF2DD4BF),
                  size: 20,
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      signal['s']!,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                    Text(
                      signal['t']!,
                      style: TextStyle(
                        color: isSell
                            ? Colors.redAccent
                            : const Color(0xFF2DD4BF),
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    signal['c']!,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  const Text(
                    'CONF.',
                    style: TextStyle(color: Colors.grey, fontSize: 10),
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
