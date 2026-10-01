/* 60問。数式は$...$、日本語は本文。数学的内容と正解番号は維持。 */
window.DRILL_QUESTIONS = [
  {
    "id": "basic-A-01",
    "level": "basic",
    "field": "A",
    "domain": "nは整数。",
    "p": "nは4の倍数",
    "q": "nは2の倍数",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "4の倍数は2でも割り切れるので、2の倍数です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$n=2$は2の倍数ですが、4の倍数ではありません。"
    }
  },
  {
    "id": "basic-A-02",
    "level": "basic",
    "field": "A",
    "domain": "nは整数。",
    "p": "nは奇数",
    "q": "nは偶数",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$n=1$は奇数ですが、偶数ではありません。",
      "qp": "$n=2$は偶数ですが、奇数ではありません。"
    }
  },
  {
    "id": "basic-A-03",
    "level": "basic",
    "field": "A",
    "domain": "nは整数。",
    "p": "nは偶数",
    "q": "nは2の倍数",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "偶数とは、2で割り切れる整数のことです。",
      "reverse": "2の倍数は2で割り切れるので、偶数です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "basic-A-04",
    "level": "basic",
    "field": "A",
    "domain": "nは自然数（1,2,3,…）。",
    "p": "nは1より大きい",
    "q": "nは素数",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "素数は、1より大きく、正の約数が1と自分自身だけの自然数です。"
    },
    "counterexamples": {
      "pq": "$n=4$は1より大きいですが、素数ではありません。",
      "qp": null
    }
  },
  {
    "id": "basic-A-05",
    "level": "basic",
    "field": "A",
    "domain": "xは実数。",
    "p": "$x>0$",
    "q": "$x\\geqq0$",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "0より大きい数は、0以上でもあります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=0$は0以上ですが、0より大きくはありません。"
    }
  },
  {
    "id": "basic-B-01",
    "level": "basic",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x=2$",
    "q": "$x^2=4$",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "2を2乗すると4になるので、$x^2=4$です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=-2$でも$x^2=4$ですが、$x=2$ではありません。"
    }
  },
  {
    "id": "basic-B-02",
    "level": "basic",
    "field": "B",
    "domain": "xは実数。",
    "p": "$2x+1=7$",
    "q": "$x=3$",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "両辺から1を引いて$2x=6$とすると、$x=3$です。",
      "reverse": "$x=3$を代入すると、$2\\times 3+1=7$です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "basic-B-03",
    "level": "basic",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x>1$",
    "q": "$x>3$",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "3より大きい数は、1より大きくもあります。"
    },
    "counterexamples": {
      "pq": "$x=2$は1より大きいですが、3より大きくはありません。",
      "qp": null
    }
  },
  {
    "id": "basic-B-04",
    "level": "basic",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x<0$",
    "q": "$x>0$",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$x=-1$は0より小さいですが、0より大きくはありません。",
      "qp": "$x=1$は0より大きいですが、0より小さくはありません。"
    }
  },
  {
    "id": "basic-B-05",
    "level": "basic",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x=0$",
    "q": "$|x|=0$",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "0の絶対値は0です。",
      "reverse": "絶対値は0からの距離なので、絶対値が0になる実数は0だけです。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "basic-C-01",
    "level": "basic",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5}の要素。A={1,2,3}、B={1,2}。",
    "p": "xはAに属する",
    "q": "xはBに属する",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "Bの要素1,2は、どちらもAの要素です。"
    },
    "counterexamples": {
      "pq": "$x=3$はAに属しますが、Bに属しません。",
      "qp": null
    }
  },
  {
    "id": "basic-C-02",
    "level": "basic",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5,6}の要素。A={2,4}。",
    "p": "xはAに属する",
    "q": "xは偶数",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "Aの要素2,4は、どちらも偶数です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=6$は偶数ですが、Aに属しません。"
    }
  },
  {
    "id": "basic-C-03",
    "level": "basic",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5}の要素。A={1,3,5}。",
    "p": "xはAに属する",
    "q": "xは奇数",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "Aの要素1,3,5は、すべて奇数です。",
      "reverse": "Uの中の奇数は1,3,5だけで、すべてAに属します。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "basic-C-04",
    "level": "basic",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4}の要素。A={1,2}、B={2,3}。",
    "p": "xはAに属する",
    "q": "xはBに属する",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$x=1$はAに属しますが、Bに属しません。",
      "qp": "$x=3$はBに属しますが、Aに属しません。"
    }
  },
  {
    "id": "basic-C-05",
    "level": "basic",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5,6}の要素。A={2,3,4}。",
    "p": "xはAに属する",
    "q": "$x=3$",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "3はAの要素なので、$x=3$ならAに属します。"
    },
    "counterexamples": {
      "pq": "$x=2$はAに属しますが、$x=3$ではありません。",
      "qp": null
    }
  },
  {
    "id": "basic-D-01",
    "level": "basic",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "正方形である",
    "q": "長方形である",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "正方形は4つの角がすべて直角なので、長方形です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "縦2、横3の長方形は、正方形ではありません。"
    }
  },
  {
    "id": "basic-D-02",
    "level": "basic",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "平行四辺形である",
    "q": "長方形である",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "長方形は2組の対辺がそれぞれ平行なので、平行四辺形です。"
    },
    "counterexamples": {
      "pq": "内角が順に$60^{\\circ},\\ 120^{\\circ},\\ 60^{\\circ},\\ 120^{\\circ}$の平行四辺形は、長方形ではありません。",
      "qp": null
    }
  },
  {
    "id": "basic-D-03",
    "level": "basic",
    "field": "D",
    "domain": "対象は三角形ABCとし、3点A、B、Cは一直線上にないものとします。二等辺三角形には正三角形を含めます。",
    "p": "3辺の長さがすべて等しい",
    "q": "正三角形である",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "3辺の長さがすべて等しい三角形を、正三角形といいます。",
      "reverse": "正三角形では、3辺の長さがすべて等しくなります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "basic-D-04",
    "level": "basic",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "ひし形である",
    "q": "長方形である",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "内角が順に$60^{\\circ},\\ 120^{\\circ},\\ 60^{\\circ},\\ 120^{\\circ}$のひし形は、長方形ではありません。",
      "qp": "縦2、横3の長方形は4辺が等しくないので、ひし形ではありません。"
    }
  },
  {
    "id": "basic-D-05",
    "level": "basic",
    "field": "D",
    "domain": "対象は三角形ABCとし、3点A、B、Cは一直線上にないものとします。二等辺三角形には正三角形を含めます。",
    "p": "直角三角形である",
    "q": "正三角形である",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "内角が$30^{\\circ},\\ 60^{\\circ},\\ 90^{\\circ}$の三角形は直角三角形ですが、正三角形ではありません。",
      "qp": "正三角形の内角はすべて$60^{\\circ}$なので、直角三角形ではありません。"
    }
  },
  {
    "id": "standard-A-01",
    "level": "standard",
    "field": "A",
    "domain": "nは整数。",
    "p": "nは6の倍数",
    "q": "nは3の倍数",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "6は3の倍数なので、6の倍数は3でも割り切れます。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$n=3$は3の倍数ですが、6の倍数ではありません。"
    }
  },
  {
    "id": "standard-A-02",
    "level": "standard",
    "field": "A",
    "domain": "nは自然数（1,2,3,…）。",
    "p": "nは素数",
    "q": "nは奇数",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$n=2$は素数ですが、奇数ではありません。",
      "qp": "$n=9$は奇数ですが、3で割り切れるので素数ではありません。"
    }
  },
  {
    "id": "standard-A-03",
    "level": "standard",
    "field": "A",
    "domain": "nは整数。",
    "p": "nは偶数",
    "q": "$n+1$は奇数",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "偶数に1を足すと、奇数になります。",
      "reverse": "$n+1$が奇数なら、そこから1を引いたnは偶数です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "standard-A-04",
    "level": "standard",
    "field": "A",
    "domain": "a,bは整数。",
    "p": "$a+b$は偶数",
    "q": "a,bはともに偶数",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "偶数どうしの和は偶数です。"
    },
    "counterexamples": {
      "pq": "$a=b=1$なら$a+b=2$は偶数ですが、a,bは偶数ではありません。",
      "qp": null
    }
  },
  {
    "id": "standard-A-05",
    "level": "standard",
    "field": "A",
    "domain": "xは実数。",
    "p": "$x>0$",
    "q": "$x^2>0$",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "正の数の2乗は正の数です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=-1$なら$x^2=1$は正ですが、$x>0$ではありません。"
    }
  },
  {
    "id": "standard-B-01",
    "level": "standard",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x^2\\leqq4$",
    "q": "$x\\leqq2$",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "$x^2$が4以下になる範囲は$-2$以上2以下なので、xは2以下です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=-3$は2以下ですが、$x^2=9$なので4以下ではありません。"
    }
  },
  {
    "id": "standard-B-02",
    "level": "standard",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x^2-x=0$",
    "q": "$x=0$ または $x=1$",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "$x^2-x=x(x-1)$なので、0になるのは$x=0$または$x=1$です。",
      "reverse": "$x=0$でも$x=1$でも、$x^2-x=0$です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "standard-B-03",
    "level": "standard",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x^2>1$",
    "q": "$x>1$",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "1より大きい数を2乗すると、1より大きくなります。"
    },
    "counterexamples": {
      "pq": "$x=-2$なら$x^2=4$は1より大きいですが、$x>1$ではありません。",
      "qp": null
    }
  },
  {
    "id": "standard-B-04",
    "level": "standard",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x>0$",
    "q": "$x^2<1$",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$x=2$は正ですが、$x^2=4$なので1未満ではありません。",
      "qp": "$x=\\frac{-1}{2}$なら$x^2=\\frac{1}{4}$は1未満ですが、$x>0$ではありません。"
    }
  },
  {
    "id": "standard-B-05",
    "level": "standard",
    "field": "B",
    "domain": "xは実数。",
    "p": "$|x|<2$",
    "q": "$-2<x<2$",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "絶対値が2未満とは、0からの距離が2未満ということで、$-2$と2の間にあります。",
      "reverse": "$-2$と2の間にある数は、0からの距離が2未満です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "standard-C-01",
    "level": "standard",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4}の要素。A={1,2}、B={2,3}。",
    "p": "xはAに属する",
    "q": "xはAとBの両方に属する",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "AとBの両方に属すれば、Aにも属します。"
    },
    "counterexamples": {
      "pq": "$x=1$はAに属しますが、Bに属さず、両方には属しません。",
      "qp": null
    }
  },
  {
    "id": "standard-C-02",
    "level": "standard",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5}の要素。A={1,2,3}、B={3,4}。",
    "p": "xはAとBの両方に属する",
    "q": "xはAとBの少なくとも一方に属する",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "両方に属していれば、少なくとも一方には属しています。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=1$はAに属しますが、Bには属さないので、両方には属しません。"
    }
  },
  {
    "id": "standard-C-03",
    "level": "standard",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4}の要素。A={1,2}、B={2,3}、C={1,2,3}。",
    "p": "xはAとBの少なくとも一方に属する",
    "q": "xはCに属する",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "AかBに属する要素を集めると1,2,3で、Cと同じです。",
      "reverse": "Cの要素1,2,3は、すべてAかBの少なくとも一方に属します。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "standard-C-04",
    "level": "standard",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5,6}の要素。A={1,2,3}、B={3,4,5}。",
    "p": "xはAに属し、Bには属さない",
    "q": "xはBに属し、Aには属さない",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$x=1$はAだけに属するのでpを満たしますが、Bに属さずqを満たしません。",
      "qp": "$x=4$はBだけに属するのでqを満たしますが、Aに属さずpを満たしません。"
    }
  },
  {
    "id": "standard-C-05",
    "level": "standard",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5}の要素。A={1,2}、B={2,3}。",
    "p": "xはAに属さない",
    "q": "xはAにもBにも属さない",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "AにもBにも属さなければ、Aには属しません。"
    },
    "counterexamples": {
      "pq": "$x=3$はAに属しませんが、Bに属するのでqを満たしません。",
      "qp": null
    }
  },
  {
    "id": "standard-D-01",
    "level": "standard",
    "field": "D",
    "domain": "対象は三角形ABCとし、3点A、B、Cは一直線上にないものとします。二等辺三角形には正三角形を含めます。",
    "p": "正三角形である",
    "q": "二等辺三角形である",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "3辺が等しければ、少なくとも2辺が等しいので、二等辺三角形です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "辺の長さが2,2,3の三角形は二等辺三角形ですが、正三角形ではありません。"
    }
  },
  {
    "id": "standard-D-02",
    "level": "standard",
    "field": "D",
    "domain": "対象は三角形ABCとし、3点A、B、Cは一直線上にないものとします。二等辺三角形には正三角形を含めます。",
    "p": "1つ以上の内角が$90^{\\circ}$より小さい",
    "q": "鋭角三角形である（すべての内角が90°より小さい三角形）",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "三角形の内角の和は$180^{\\circ}$です。すべての内角が$90^{\\circ}$以上なら和が$270^{\\circ}$以上になってしまうため、必ず$90^{\\circ}$より小さい内角があります。したがって、指定された範囲のすべての三角形でpが成り立ちます。しかし、内角が$30^{\\circ},\\ 60^{\\circ},\\ 90^{\\circ}$の三角形は鋭角三角形ではないので、$p\\Rightarrow q$は成り立ちません。",
      "reverse": "鋭角三角形はすべての内角が$90^{\\circ}$より小さいので、$q\\Rightarrow p$は成り立ちます。"
    },
    "counterexamples": {
      "pq": "内角が$30^{\\circ},\\ 60^{\\circ},\\ 90^{\\circ}$の三角形には$90^{\\circ}$より小さい角がありますが、鋭角三角形ではありません。",
      "qp": null
    },
    "explanationIncludesCounterexample": {
      "pq": true
    }
  },
  {
    "id": "standard-D-03",
    "level": "standard",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "4つの角がすべて直角である",
    "q": "長方形である",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "4つの角がすべて直角の四角形を、長方形といいます。",
      "reverse": "長方形の4つの角は、すべて直角です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "standard-D-04",
    "level": "standard",
    "field": "D",
    "domain": "対象は三角形ABCとし、3点A、B、Cは一直線上にないものとします。二等辺三角形には正三角形を含めます。",
    "p": "$45^{\\circ}$の内角をもつ",
    "q": "二等辺三角形である",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "内角が$45^{\\circ},\\ 60^{\\circ},\\ 75^{\\circ}$の三角形は$45^{\\circ}$の角をもちますが、二等辺三角形ではありません。",
      "qp": "内角が$50^{\\circ},\\ 50^{\\circ},\\ 80^{\\circ}$の三角形は二等辺三角形ですが、$45^{\\circ}$の角をもちません。"
    }
  },
  {
    "id": "standard-D-05",
    "level": "standard",
    "field": "D",
    "domain": "対象は三角形ABCとし、3点A、B、Cは一直線上にないものとします。二等辺三角形には正三角形を含めます。",
    "p": "二等辺三角形である",
    "q": "鈍角三角形である（90°より大きい内角をもつ三角形）",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "正三角形は二等辺三角形ですが、$90^{\\circ}$より大きい角をもたず、鈍角三角形ではありません。",
      "qp": "内角が$20^{\\circ},\\ 30^{\\circ},\\ 130^{\\circ}$の三角形は鈍角三角形ですが、二等辺三角形ではありません。"
    }
  },
  {
    "id": "advanced-A-01",
    "level": "advanced",
    "field": "A",
    "domain": "a,bは整数。",
    "p": "a,bはともに偶数",
    "q": "$ab$は偶数",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "偶数を整数に掛けると偶数になるので、積$ab$も偶数です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$a=2,b=1$なら$ab=2$は偶数ですが、bは偶数ではありません。"
    }
  },
  {
    "id": "advanced-A-02",
    "level": "advanced",
    "field": "A",
    "domain": "a,bは実数。",
    "p": "$a+b=0$",
    "q": "$ab=0$",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$a=1,b=-1$なら和は0ですが、積は$-1$で0ではありません。",
      "qp": "$a=0,b=1$なら積は0ですが、和は1で0ではありません。"
    }
  },
  {
    "id": "advanced-A-03",
    "level": "advanced",
    "field": "A",
    "domain": "nは整数。",
    "p": "nは2の倍数で、かつ3の倍数",
    "q": "nは6の倍数",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "2と3の最小公倍数は6です。したがって、2と3の両方の倍数である整数は6の倍数です。",
      "reverse": "$n=6m$と書けるなら、$n=2(3m)=3(2m)$なので、2と3の両方の倍数です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "advanced-A-04",
    "level": "advanced",
    "field": "A",
    "domain": "a,bは整数。",
    "p": "$ab$は4の倍数",
    "q": "a,bの少なくとも一方は4の倍数",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "一方が4の倍数なら、その整数にもう一方を掛けた積も4の倍数です。"
    },
    "counterexamples": {
      "pq": "$a=b=2$なら$ab=4$は4の倍数ですが、どちらも4の倍数ではありません。",
      "qp": null
    }
  },
  {
    "id": "advanced-A-05",
    "level": "advanced",
    "field": "A",
    "domain": "x,yは実数。",
    "p": "$x=y$",
    "q": "$x^2=y^2$",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "等しい数どうしを2乗すると、平方も等しくなります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=1,y=-1$なら平方はどちらも1ですが、$x=y$ではありません。"
    }
  },
  {
    "id": "advanced-B-01",
    "level": "advanced",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x=1$ または $x=-1$",
    "q": "$x^2\\geqq1$",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "1も$-1$も2乗すると1になるので、$x^2$は1以上です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=2$なら$x^2=4$は1以上ですが、xは1でも$-1$でもありません。"
    }
  },
  {
    "id": "advanced-B-02",
    "level": "advanced",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x^2=4$ で、かつ $x>0$",
    "q": "$x=2$",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "$x^2=4$になる数は2と$-2$です。正の数に限ると2だけです。",
      "reverse": "$x=2$なら$x^2=4$で、$x>0$も満たします。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "advanced-B-03",
    "level": "advanced",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x>0$",
    "q": "$x^2=4$ で、かつ $x>0$",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qには$x>0$という条件も含まれているので、pを満たします。"
    },
    "counterexamples": {
      "pq": "$x=1$は正ですが、$x^2=1$なので4ではありません。",
      "qp": null
    }
  },
  {
    "id": "advanced-B-04",
    "level": "advanced",
    "field": "B",
    "domain": "xは実数。",
    "p": "$x\\leqq2$ で、かつ $x\\ne0$",
    "q": "$x^2<4$",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$x=-3$は2以下で0でもありませんが、$x^2=9$なので4未満ではありません。",
      "qp": "$x=0$なら$x^2=0$は4未満ですが、$x\\ne 0$ではないのでpを満たしません。"
    }
  },
  {
    "id": "advanced-B-05",
    "level": "advanced",
    "field": "B",
    "domain": "xは実数。",
    "p": "$|x|=1$",
    "q": "$x^2=1$",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "絶対値が1の数は1と$-1$で、どちらも2乗すると1です。",
      "reverse": "$x^2=1$になる数は1と$-1$で、どちらも絶対値が1です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "advanced-C-01",
    "level": "advanced",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5,6}の要素。A={1,2,3,4}、B={3,4,5}。",
    "p": "xはAに属する",
    "q": "xはAに属し、Bには属さない",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "Aに属し、Bに属さない要素は、Aには属しています。"
    },
    "counterexamples": {
      "pq": "$x=3$はAに属しますが、Bにも属するのでqを満たしません。",
      "qp": null
    }
  },
  {
    "id": "advanced-C-02",
    "level": "advanced",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5,6}の要素。A={1,2}、B={2,3}。",
    "p": "xはAに属し、Bには属さない",
    "q": "xはBに属さない",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "pにはBに属さないという条件が含まれているので、qを満たします。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "$x=6$はBに属しませんが、Aにも属さないのでpを満たしません。"
    }
  },
  {
    "id": "advanced-C-03",
    "level": "advanced",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5,6}の要素。A={1,2,3,4}、B={3,4,5}、C={3,4}。",
    "p": "xはAとBの両方に属する",
    "q": "xはCに属する",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "AとBの両方に属する要素は3,4で、Cと同じです。",
      "reverse": "Cの要素3,4は、どちらもAとBの両方に属します。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "advanced-C-04",
    "level": "advanced",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5}の要素。A={1,2}、B={2,3}、C={3,4}。",
    "p": "xはAとBの少なくとも一方に属する",
    "q": "xはCに属する",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "$x=1$はAに属するのでpを満たしますが、Cに属さずqを満たしません。",
      "qp": "$x=4$はCに属しますが、AにもBにも属さないのでpを満たしません。"
    }
  },
  {
    "id": "advanced-C-05",
    "level": "advanced",
    "field": "C",
    "domain": "xは全体集合U={1,2,3,4,5}の要素。A={1,2}、B={3,4}、C={2,3}。",
    "p": "xはAとBの少なくとも一方に属する",
    "q": "xはCに属する",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "Cの要素2,3は、それぞれA、Bに属するので、pを満たします。"
    },
    "counterexamples": {
      "pq": "$x=1$はAに属するのでpを満たしますが、Cに属しません。",
      "qp": null
    }
  },
  {
    "id": "advanced-D-01",
    "level": "advanced",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "長方形で、かつ隣り合う2辺の長さが等しい",
    "q": "ひし形である",
    "implications": {
      "pq": true,
      "qp": false
    },
    "answer": 1,
    "explanation": {
      "forward": "長方形では向かい合う辺が等しいので、隣り合う2辺も等しければ4辺が等しくなり、ひし形です。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": null,
      "qp": "内角が順に$60^{\\circ},\\ 120^{\\circ},\\ 60^{\\circ},\\ 120^{\\circ}$のひし形は、長方形ではないのでpを満たしません。"
    }
  },
  {
    "id": "advanced-D-02",
    "level": "advanced",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "長方形またはひし形である",
    "q": "正方形である",
    "implications": {
      "pq": false,
      "qp": true
    },
    "answer": 0,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "正方形は長方形でもひし形でもあるので、pを満たします。"
    },
    "counterexamples": {
      "pq": "縦2、横3の長方形はpを満たしますが、正方形ではありません。",
      "qp": null
    }
  },
  {
    "id": "advanced-D-03",
    "level": "advanced",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "ひし形で、かつ1つの角が直角である",
    "q": "正方形である",
    "implications": {
      "pq": true,
      "qp": true
    },
    "answer": 2,
    "explanation": {
      "forward": "ひし形は平行四辺形です。1つの角が直角なら残りも直角で、4辺も等しいので正方形です。",
      "reverse": "正方形は4辺が等しいひし形で、すべての角が直角です。"
    },
    "counterexamples": {
      "pq": null,
      "qp": null
    }
  },
  {
    "id": "advanced-D-04",
    "level": "advanced",
    "field": "D",
    "domain": "対象は三角形ABCとし、3点A、B、Cは一直線上にないものとします。二等辺三角形には正三角形を含めます。",
    "p": "二等辺三角形で、かつ直角三角形である",
    "q": "$60^{\\circ}$の内角をもつ",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "pを満たしても、qを満たさない場合があります。",
      "reverse": "qを満たしても、pを満たさない場合があります。"
    },
    "counterexamples": {
      "pq": "内角が$45^{\\circ},\\ 45^{\\circ},\\ 90^{\\circ}$の三角形はpを満たしますが、$60^{\\circ}$の角をもちません。",
      "qp": "正三角形は$60^{\\circ}$の角をもちますが、直角三角形ではないのでpを満たしません。"
    }
  },
  {
    "id": "advanced-D-05",
    "level": "advanced",
    "field": "D",
    "domain": "対象は、4つの内角がすべて180°より小さい四角形とします。長方形・ひし形には正方形を含めます。",
    "p": "長方形であるが、正方形ではない",
    "q": "ひし形である",
    "implications": {
      "pq": false,
      "qp": false
    },
    "answer": 3,
    "explanation": {
      "forward": "長方形であり、かつひし形である四角形は正方形です。そのため、正方形ではない長方形はひし形ではありません。つまり、pとqを同時に満たす図形は存在しません。縦2、横3の長方形が$p\\Rightarrow q$の反例です。",
      "reverse": "正方形はひし形ですが、『正方形ではない』という条件を満たさないため、$q\\Rightarrow p$の反例です。"
    },
    "counterexamples": {
      "pq": "縦2、横3の長方形はpを満たしますが、4辺が等しくないのでひし形ではありません。",
      "qp": "正方形はひし形ですが、「正方形ではない」という条件に合わないのでpを満たしません。"
    },
    "explanationIncludesCounterexample": {
      "pq": true,
      "qp": true
    }
  }
];
