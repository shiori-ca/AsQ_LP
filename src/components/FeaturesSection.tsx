import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  SearchPersonIcon, 
  ProfileCheckIcon, 
  MessageTimeIcon, 
  NotificationArrowIcon, 
  AnswerPenIcon, 
  RatingThumbIcon 
} from './CustomIcons';

const steps = [
  {
    number: 1,
    title: '回答者を検索',
    description: 'あなたの質問内容にマッチする回答者を検索できます。現在質問を受付中の回答者のみが表示されるため、確実に返答を得ることができます。',
    icon: SearchPersonIcon,
    gradient: 'from-gray-700 to-gray-900',
    screenTitle: '検索画面',
    screenDescription: '回答者一覧'
  },
  {
    number: 2,
    title: 'プロフィール確認',
    description: '回答者のプロフィール情報、過去の回答履歴、他のユーザーからの評価を確認。信頼できる回答者を見つけたら「質問する」ボタンをタップしましょう。',
    icon: ProfileCheckIcon,
    gradient: 'from-gray-600 to-gray-800',
    screenTitle: 'プロフィール画面',
    screenDescription: '回答者詳細'
  },
  {
    number: 3,
    title: '質問を送信',
    description: '質問内容と回答期限を設定して送信。万が一回答者に断られても大丈夫！自動で類似の回答者を最大3回まで探してマッチングします。',
    icon: MessageTimeIcon,
    gradient: 'from-gray-800 to-black',
    screenTitle: '質問作成画面',
    screenDescription: '質問入力フォーム'
  },
  {
    number: 4,
    title: '回答者に通知',
    description: '回答者にあなたの質問が通知されます。回答者は質問内容と期限を確認した上で、受諾するかどうかを判断します。（回答者は最大5件まで質問を受け持てます）',
    icon: NotificationArrowIcon,
    gradient: 'from-gray-700 to-gray-900',
    screenTitle: '通知画面',
    screenDescription: '新着通知'
  },
  {
    number: 5,
    title: '回答を受信',
    description: '回答者があなたの質問に対して丁寧に回答し、返信をお送りします。リアルタイムで現地の生の情報を受け取ることができます。',
    icon: AnswerPenIcon,
    gradient: 'from-gray-600 to-gray-800',
    screenTitle: '回答画面',
    screenDescription: '回答メッセージ'
  },
  {
    number: 6,
    title: '回答を評価',
    description: '受け取った回答の品質を5段階で評価。満足のいく回答には高評価をつけて、回答者のモチベーション向上にご協力ください。',
    icon: RatingThumbIcon,
    gradient: 'from-gray-800 to-black',
    screenTitle: '評価画面',
    screenDescription: '星評価システム'
  }
];

// カスタムPhoneFrameコンポーネント（ステップ用）
function StepPhoneFrame({ step, className = "" }: { step: typeof steps[0], className?: string }) {
  return (
    <motion.div 
      className={`relative mx-auto ${className}`}
      initial={{ opacity: 0, y: 30, rotate: -3 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotate: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 2,
        transition: { duration: 0.3 }
      }}
    >
      {/* iPhone frame */}
      <div className="relative w-48 h-96 bg-black rounded-[2.5rem] p-1.5 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-10"></div>
          
          {/* Screen reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/10 rounded-[2rem] pointer-events-none"></div>
          
          {/* Screen content */}
          <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden p-4">
            {/* Step icon */}
            <motion.div 
              className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md`}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <step.icon className="text-white w-6 h-6" />
            </motion.div>
            
            {/* Screen title */}
            <h4 className="text-gray-800 text-sm font-bold mb-2 text-center">{step.screenTitle}</h4>
            <p className="text-gray-500 text-xs text-center mb-4">{step.screenDescription}</p>
            
            {/* Placeholder content */}
            <div className="w-full space-y-2">
              <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-2 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-2 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
            
            {/* Step number indicator */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{step.number}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-gray-100/60 to-transparent rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-200/40 to-transparent rounded-full"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-black mb-8">
            AsQの機能
          </h2>
          
          {/* Problem statement */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              こんな疑問を解決できます
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "お出かけ先の混雑状況やリアルタイムな現地情報を知りたい",
                "デートスポットや観光地の生の情報を現地の人から直接聞きたい",
                "買い物での商品選びやお店選びで迷った時に決定の後押しが欲しい"
              ].map((problem, index) => (
                <motion.div 
                  key={index}
                  className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <p className="text-gray-700">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Solution flow */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-black text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            使い方はとても簡単
          </motion.h3>
          
          <div className="relative">
            {/* Animated flow line */}
            <motion.div 
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 transform -translate-x-1/2 rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            ></motion.div>
            
            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    key={step.number} 
                    className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 lg:gap-16`}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  >
                    {/* Step content */}
                    <div className="flex-1 text-center lg:text-left">
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        whileHover={{ 
                          scale: 1.03, 
                          y: -10,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          <motion.div 
                            className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mr-3 shadow-lg`}
                            whileHover={{ 
                              scale: 1.15, 
                              rotate: [0, -5, 5, 0],
                              boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="text-white w-7 h-7" />
                          </motion.div>
                          <span className="text-sm font-bold text-gray-500">
                            STEP {step.number}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-black mb-3">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </motion.div>
                    </div>

                    {/* iPhone Frame with App Screen */}
                    <div className="flex-shrink-0">
                      <StepPhoneFrame step={step} />
                    </div>

                    {/* Animated step number circle */}
                    <motion.div 
                      className="hidden lg:block absolute left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    >
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-br from-white to-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ 
                          scale: 1.3,
                          borderColor: '#000',
                          boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                        }}
                        animate={{ 
                          boxShadow: ["0 4px 8px rgba(0,0,0,0.1)", "0 8px 16px rgba(0,0,0,0.15)", "0 4px 8px rgba(0,0,0,0.1)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <span className="text-black font-bold text-sm">{step.number}</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-6">
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            whileHover={{ scale: 1.02, y: -3 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
              </div>
              <h4 className="font-bold text-black text-lg">
                ご利用上の注意
              </h4>
            </div>
            <p className="text-gray-700">
              投稿された質問と回答は、ブロック関係にないすべてのユーザーが閲覧できます。個人情報やプライベートな内容の投稿はお避けください。
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            whileHover={{ scale: 1.02, y: -3 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V14L18.5,18.2L19.5,16.5L13,12.9V6H11Z"/>
                </svg>
              </div>
              <h4 className="font-bold text-black text-lg">
                開発中の新機能
              </h4>
            </div>
            <p className="text-gray-700">
              回答者が回答に対して報酬を受け取れる機能を現在開発中です。より質の高い回答を提供するインセンティブ制度をご期待ください。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}