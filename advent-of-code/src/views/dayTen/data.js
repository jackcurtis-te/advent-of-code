export const bracketMap = {
  ")": "(",
  "]": "[",
  "}": "{",
  ">": "<", 
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">", 
};

export const openingChars = ["(", "[", "{", "<"];

export const part1PointsMap = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137
}

export const part2PointsMap = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4
}

export const inputString = 
`{<{<{[<[{{([{{{}()}<{}()>}<[{}]>]<<{{}<>}([]<>)>[({}<>){()[]}]>)[[([(){}][<><>])<<()>{()()}>]]}}[(<{[(<>
  [<{{[[(({({<{{<>[]}[[][]]}[{{}()}[[][]]]>}{<[{()<>]<[]()>]{([][]){{}[]}}>})(([<[[]()][()()]><{[]}(<><
  {{<{[{[{<{[[[[[]()]]<<{}{}}[{}()]>]]}[<<<<[]()><[][]>><<()<>>({}<>)>>{{{{}{}}[{}<>]}[[<><>]<[
  ([{((<{((<[(({{}[]}<()()>)[{{}<>}[()()]})<{{()()}[<><>]}>]>))}({<<[({{[]<>}[<>()]}<((){}){[][]}>)[{[{}[
  {([<[((<[[<<({[]()}[[]{}]){<{}<>>{()[]}}>[{<{}{}>[(){}]}<({}<>)[[]()]>]>](({{<[]()>(()[])}{<<>()>({
  [({[([{<<{<<(<()()>)<[()<>]([]{})>>{<({}[]>{[][]}>([()[]]{(){}})}>{{[{()()}{{}<>}]({<>{}}<{}{}>)}[
  <[({(<([{<<<(([]()){()()})[<{}><<>>]><({{}<>](<><>))([{}[]]{(){}})>>(((<[]<>>({}[]))([<>()](<>
  <{[[{<<[{(([<([][])<{}<>>>{{<>[]}{()}}]{(<()<>>(()<>)){<{}[]>[[]()]}})<(<({}()){[]{}}>(<[]()>[[]{}])){<(<>
  [<[[({<<[[<{{(<>())}<<{}[]>{{}<>}>}[(((){})<()[])){<{}()>[<>()]}]>{[([{}[]](<>{}))<{<>()}{[]()}>](({(){}}<{
  (<([<[<{{<[{[(<>())<()()>](<<>[]>{()()})}<<{[]{}}>[(<><>){<>[]}]>]<(<<[]<>><<>{}>>(([])[<>{}]))>>>({<<
  (([{(({<{<{(({{}[]}{<>[]}){<()()><<>{}>})[[({}[]){(){}>]]}[[{{<>[]}{()<>}}[{{}}{[][]}]]<<<()()>([][]
  [<([{{<[[{<([<{}{}>{(){}}]{[[]{}]{<>[]}})([(<>{})[()[]]])><([{<><>}([]{})]({()()}(<>[])))[[[(){}]{<><>}]<<[
  <((<<<[<<([({{()[]}})[{{<>[]}([]{})}{{[]<>)({}<>)}]][[<{<>}(()())>[[<>()]<{}{}>]][<({}()){<>}>{{()()}{<><>}
  [{{[{[({([[<({()}((){}))>{([[]<>]<[][]>)}]{({([]<>)<()()>}(<()<>><<>()>)){{<<>{}>{()[]}}[(()())<[
  (([[<[[{[{[([[{}()]<[]()>){<()<>>{{}<>}})<{[{}[]]{()<>}}{(()){<>[]}}>]({[{()[]}[<>]]}<(<{}
  [{[[[<(<<([[<{()<>}<(){}>>({{}()}<<>{}>)](<{{}()}><<{}[]}<<>[]>>)]<<({[][]}[()[]])[<{}{}>(<>[])]>>){<{{{()()}
  (<[<<{[{[[<{<<()()>{<>()}>}>]{[<([<>[]][()[]])<[<>[]]{{}()}>>((<()()>({}<>))<{(){}}{<>{}}>)][<{(<>{}>}{
  ((<[{<<<<([{{(<>())<(){}>}(<{}<>>[<>{}])}({[<>()]{[]<>}})])[{((<{}<>><()<>>)(<[][]>[()]))<({<>[]}
  ([((((([[{(<<<<>()>(<>[])>>[[(<>[])<<>{}>}<[[]{}](()[])>])([[({}<>)<[]()>]<[{}{}]{<>[]}>](<(<>())>{<
  <<({[{[{((<<({()<>}<[]{}>)({<>[]})><{([]{})}((()[]))>>(({([]<>){{}{}}})<[{{}[]}[(){}]](<()[]><<>{}>)>)
  {<[(({<[[([((<()<>><<><>>)(({}())<{}()>))<<<()()>{[]}>[{[][]}[{}[]]]>]{({{<>{}}<(){}>}[<()[]>{<>[]}>)(<[<>
  {{({<[((([([<<[]{}>[()()]>(<[]{}>)]{[{[]()}]<<(){}>[()<>]>})[{{[{}<>]}[[<>{}]{<><>}]}]]((<{{{}[]}}>[[<[]<>
  <[(<(<[((<{{[<(){}>[[][]]]}}>))]>)([({<(<<{([][])[()[]]}(<{}[]><()<>>)>{[<(){}>([][])]}>{[<<{
  (<{{<{<<[((<(<{}{}><[]<>>)<<{}{}><(){}>>>([{<><>}[()()]][{<>[]}([]<>)])))<<{{<<><>>}(<[]{}>(
  [(((({{[[{{([(<>{})<[][]>])([[()()][{}]](<{}<>>{<><>}))}}<[<{[()]<[]()>}{(<>[]){<>()}}>[[(<>[])[(){}]](({}())
  ({{{<{[<{[{<{{{}{}}}[[(){}]{()[]}]>[[<[]<>>{<><>}]([(){}])]}[({{()[]}[{}[]]})[[{<>[]}<{}[]>]]]]}>](({{[[
  <{<[{{[{<[[({<[]<>>}{{()()}(<>[])})]]>}[{([[[<<>[]><[]{}>][{<><>}]][((()())(()()))([{}()])]
  <<<[([({{<<{[({}<>)[()[]]]({()[]}({}[]))}{[{<>[]][[]]]}>>}}[[({[({()[]}<()>)]<[[()<>]{()<>}][
  {[<({{{{<{{{[<()<>>[{}<>]]<[()()]<[][]>>}({<[][]>[()()]}<<[][]><[]()>>)}{([(()<>)<()()>])}>(([<[<
  [{<{[<<{{[{[([()<>](()[]))]((<{}{}>)(<[]<>>[<><>]))}]}}>><<<({{{[((){})(<><>)]((()<>){[][]})}(<
  [({(<{<{[<{([{[]()}[()()]])><[<{[]<>}{{}()}><(()())(()<>)>](<[[]{}]>[([]{})<()()>])>>][{([<([]())[[]<>]>
  {{(<(<{{({((({{}[]}<<>{}>){<{}()>[[][]]})<{{[]()}{()()}}(<{}[]>{()()})>)})}[<<[[{{<>[]}{<>{}}}{{[
  <<[<{{[<<{({{(<><>)({}())}({{}<>}[<>])}{[(()<>)<(){}>]{<<><>><[][]>}})<({<[]{}>[[][]]}<<<>{}>{()}>)>}>[<
  <{(<[<(((<({[[{}[]>(<>[])]<{[]<>}>}({(()())<{}{}>}<<<>[]>[<>()]>)){<<<[]{}>{()[]}>([[]{}]([]{}))><<{<>[]}
  <{{{[(({<{<[<<[]()>({}())>](<((){})[(){}]>(<<>>([]()))))}>([[<[<{}[]><[]()>]{({}[])({}())}>[[({
  {([{(<{([<{([{[]()}(<>[])]<<{}<>>(<>{})})[{<<>[]>}(<<><>>[<><>])]}[[{([][])({}())}](<(<>{})(<>)>(([]()){{}
  ([<<{[[<((([<{()[]}>]<{[[][]]({}<>)}])<([{()[]}<()()>]{<<><>>[()()]})>))<[<<<([]<>)[()[]]>
  [[{([{([{[<(<({})[()[]]>[{[]()}[()()]]}[<{{}()}({}[])>(<[]<>>[()[]])]>([((()[])[(){}])]<[{
  {{[([[(<(([[[{[]{}}[()()]][[[]{}][<>[]]]][{<<>[]>}]][(<<(){}>{{}<>}>)[<[[]{}]{()()}>[((){})
  [({[[([[(<[{<([]{})(<><>)>}][<[[()()]<(){}>][[(){}][{}]]>([({}<>)[[]<>]]{[()[]]<[]()>})]>[[<(([]())<
  [<(<[<<{[<{<<[{}()]<<><>>>{[()<>]<[]<>>}><[([]<>)[{}])<{[]()}[<><>]>>}[[<<<>{}><()[]>>(({}[]
  (({[{{{[<[{[[<()[]>({}{})][(()[])[(){}]]]({{[]()}}[(<>())<<>[]>])}]<([<<<>[]>[()[]]>{[()<>]<<><>>}]([(<
  ({<(({([[<(<({<>()}[()<>])({<><>}<[][]>)>([[<>()]([]())]))>]{{[{{{{}[]}}<[<><>]<<>[]>>}}}[{
  [(<([({<<(<{<{{}()}{[]()}>(<()()>{{}{}})}{{([]{})<[]>}<(<><>)>}>[<{<[]>([]<>)}({<><>}{[]{}}
  <{<[[((([{<[({{}[]}[<>()])(<{}[]>(<>{}))][{{()[]}([][])}({[]})]>({<[()[]]<{}{}>>{<[]{}>{()[]}}}([[{}][{}
  [([[<(<[((<[({{}{}}[{}[]]){[[]()](<>())}]>){[({[()()]([]<>)}<<<>{}>(<>()>>)]{{((<>())[{}()])[[()<>]<[]
  {{[<{([<[(<([(<>())<<>{}>])[{[()[]][<>{}]}([[]()]<{}<>>)]>)]<[{[{(())(<>{})}[({}{}){[]()}]]}<<{([]{})}[<
  ([{{<<<([<((({{}{}}((){})){[<><>][[]<>]})<[{[][]}[()()]]([[]<>]{[]()})>)[[<([][]){<><>}>][<
  ((<(<[([<<<({[<>[]][{}<>]}<{[]()}{{}{}}>)[({{}{}}([]()))(<()><<>>)}>(([<(){}>((){})]){<<<>[]>[{}{}]>({(){}}<
  (<<{{[[[<({({[{}{}]((){})}({<><>}({}<>)))}[(<[{}[]][()<>]>{({}{})(()())})<<[[]{}](<>)>([(){}][<><>])>])[
  <({{<<(({<[((<{}()>{<>{}}){{{}<>}{<>{}}}){({[]()}<{}[]>)<{()[]}[{}()]>}]{{[{()<>}(<><>)][<<>
  <[{[[(<<{{(({{{}<>}{<>()}}(<[]{}>))]([[[<>{}](<>)]{(()())<(){}>}][(({}()){<>()})[(()())[{}{}]]])}<<{{<()()
  [{{([<<{[{<([(())]<<{}>[[]<>]>){([()()]){(<>[]]([][])}}>{<[([]{})]{{{}}((){})}><{[<>[]][<>[]]}{{<><>}<
  {{{{<((<<{({<(<>[])[<>{}]>{([]<>){[][]}}}[[{[]()}{{}[]}]{[[]{}]<<>()>}])}(<([<{}{})][[{}()]<()()>])(<([][])(
  <{{[{[[[[{((((()())(()()))<<()>{()<>}>){[{[]{}]][(<><>)[{}{}]]}){{([<>[]]({}<>))((<>()){[]<>})}({<<>{}><
  ({({[<<<[{[{([{}()}{<>[]})[(()[]){{}{}}]}]{<([()<>]((){})){(<>{})}>[<{<>()}([])><{[]{}}<[]()>>]}}]{([(<[()
  <{({(<{<((<([[{}[]][<>()]])[{(<>)(()[])}([<>()]<[]()>)]>)<<{[<{}<>>[[]()]]}[<((){})<<>()>>
  ((({(((<<[{<<([]<>)[{}()]>((<><>)({}()))>([[<>[]](<>{})][<{}{}>{[][]}])}]>>)))}){[<{{{(<<[[<{}()>
  [<{<<{[<<<[{[{{}[]}[{}[]]]((<>[]){(){}})}{<<{}<>>{<>()}>(([]{}))>][{[<<>[]>]({{}{}}<[]<>>)}]>>
  ({{[(<{[{[{{(<()[]>(()()))<<{}()><[]()>>}[(<[]>[{}()])[<{}{}>(()[])]]}]}({{<<{[]<>}((){})><<[]
  {(<[(<<<[({([((){})]({()<>}{[]<>}))({{<>{}}([][])})}{(({<>{}}<{}<>>)(({}{}){()[]}))[{([]())(
  <{([[[(<{[{{{[()<>]}{[<><>][[]<>]}}((([]){{}[]})<<{}>(()<>)>)}<((<(){}>{{}{}})){{(()[]}[()<>]}{[[]()][<>()]
  <[{{<([{{({(<{<>[]}{<>{}}>)[{{[][]}<<>{}>}[[(){}]<()<>>]]}<(({[]{}}({}{})){{{}{}}<<>()>})(
  {[{{{([({{<<([{}[]][[][])){<[][]>(<>())}><<(<>())<{}{}>>(<[][]>{<><>})>>(<([(){}]<<>{}>)[<[]
  (<(<({[[[<<{<[{}<>]([]())>{([]())[()<>]}}<{{<><>}[{}<>]}{[<><>]<[][]>}>>[({[(){}][{}()]}<<[]>([]<>)>)]>[<
  {{[({[<[<<<<<{[]{}}<<>[]>>({[]<>}{[]()})><<[[]<>]>[<()<>>{<><>}]]>[[{<()<>><[]<>>}<([]{})(<>{})>]({([
  {<[([([[<<<{{<()[]>[<>[]]}[[<>[]]([][])]}([[<><>]<()<>>])>({{[[]{}]{{}<>}}<[<><>][<>()]>}<[[{}[]
  <<<<[[<[<[[{{[[]{}]{{}<>}}(<<>()>([]{}))}{[{()[]}{{}{}}][{<><>}(())]}]<((<{}[]>[<>{}])({[]{}}(<>{})))[<
  <{[{({{{((<<[<<>[]>[{}()]]>{[([]())((){})]([[]()])}>[[({[]<>]{()()}){{()[]}{{}[]}}]<{{<>{}}([]
  {{(<<{[[[[(<([{}[]]([]{}))>[{({}<>)<<><>>}({[][]}({}{}))])]]](<{<[({[]{}}([]<>))({{}[]}<()[]>)]{{
  <{[<{[<<<<[<[<{}()><<>>](<()>({}()))>{[<<>[]>{<><>}](({}()))}]{{((()<>)((){})){({}[])<<><>>}
  ({<{[({([{({<<<><>>([]<>)>(<[]()>[{}()])}<[(()())<()()>][{{}{}}]>)}])(({{(<{(){}}<{}()>>[<<>()><{}<>
  {{(({[([<((<{<{}[]>{<>()}}[[<>{}][()<>]]>))[[<{[[][]][[][]]}[<[]>(()[])]>{<[{}[]]{<>{}}><<{}()>[{
  <([{{[[<{{[[{{<>}{{}[]}}(([]())[<><>])][[<[]{}>([]{})]{({}){<><>}}]]<<[<[]()><{}{}>][{()}[<>[]]]>{<<<>{}>(<>
  {[[[([[(<<[{<<<>()><()[]>>}][<[<[]{}>(<><>))[<[]<>>[<>[]]]><<{[]()}{{}<>}><{<>}<<>{}>>>]><{<([()
  <((<[<[([(({{{{}<>}{()[]}}{[<><>](()())}})>{<(((())({}[]))[{{}<>}{<><>}]){<[{}{}]{<>{}}>({()
  [{[<<({({{<[[[[]<>]<<>()]]]([[<>[]]<<>{}>]<{[]<>}>)>}}{[[<[{[]{}}<{}[]>](((){}){<><>})>{<[[][]](<>())>
  <[[{{[(<{<(([[(){}]{<>())]))[<[<{}[]>{{}[]}][{()<>}[[]<>]]>{{<<>{}><[]<>>}[([]<>)[[]]]}]>}<<<<{[()<
  <(<<{{(<<({<{<[]()>}({[]()}[()<>])>(([()()][{}<>])<<(){}>{[][]}>)}(<{{[]{}}{<>()}}[{()<>}(()<>)]>))((({[{}][[
  {<<<{({{<([[<{<>{}}[()()]><[<>[]]>][<<<><>>>[(<><>)<<>()>]]]([({(){}}[<>()])]<<<<>[]>>({{}[]}[()[]])>
  [{<[{[[[({(<<[()[]]>{{()<>}{<>()}}>)[({[[][]][{}<>]}<<[]{}>[()<>]>){[<<>{}>{{}[]}](([]{}){[][]})}]}{{[(
  {(<<<{{<[({([({}[])[{}()]]{(<>{})<{}{}>})(<(<>())>({()<>}<[]{}>))}<{<([][]]{()()}>}<<(<>()){[][]
  ((<{{[{{[([({[{}()]}[{()<>}(()<>)])]([([<><>]<<><>>)<{[][]}<<>[]>>]((<<>{}>({}<>))([[]()]<{}()>))))]}
  [(<<<{<{(({(<<[]{}>><[[]{}][()()]>)[(({}{}}[<>[]])[({}<>){()[]}]]}))[(<<<{[]<>}>{[(){}][()[]]}>>[{[([]<>)([]
  ({({([<([{([[{[][]}{{}[]}]<[<>[]]({}())>])}(({<{()[]}{[]{}}>{({}())<{}[]>}})({{{{}[]}<{}()>}}))][[[[
  ([<[<{<[[<{[((<>())(()))[<(){}>{{}[]}]]{<{()[]}{[]()}><<<><>>>}}(<{[()<>]<<>()>}>)><{(([<>()]({}<>))([
  [<[(({[<{{[[((())[<>[]])(<[]<>><<>{}>)][{{<>()}<()<>>}[{{}()}([][])]]]{{<<[]()>>[<{}()>[<><>]]){[{<>()
  [(<([[<{{[(([<<><>>(()())](([][]]{<>()}))[<<[]<>><()()>>[({}<>){()<>}]]){{<(()[]){()[]}>}<(<
  (<[{[<{[[{{([[{}()]<{}()>]<[()[]](()())>)[<[{}{}][[]()]><[{}<>]{{}<>}>]}}{{[{[{}<>][[][]]}<({}()){[]{}}>]
  ({{<[{<<<<[<<[(){}](<><>)>({{}()}{<><>})>}[({({}<>){<>{}}}<[()<>][(){}]>)[{(()<>)({}[])}]]>
  <{<({<([[((<[{[][]}{<>()]]>{<([][])[[]<>]>[(<>{})[{}()]]})[{[({}())[[][]]]{{[]()}}}<[((){})[[]
  <<<({{[<(<<{(<[][]>(<>()))({()[]})}[[<<>[]>({}[])]{[[][]]}]>{(<(())<{}<>>>(([])[<>{}])){(<<><>>[[][]])}}>(<[[
  [<<({[[(<[[[{<[]{}>{()[]}}<[<>()]>](<{[][]}<<>()>><[[][]]([]())>)]](({{{{}()}{<>[]}}}<({[][]}[
  <{[({{{<[(({<({}{})[[]<>]>(({})(<>{}))}[{<{}()>[[][]]}]))]>{<{{{([{}{}]({}{}))(<[]{}>({}[]))}{<{{}()}({}<>)
  ({{<((({({<[{[<>{}]([][])}]<[{[]<>}]{[[]()][[][]]}]>[{({{}{}}<[][]>){{(){}}}}]})<[(<<({}())<{}()>>({<>}{()()}
  <{{{[(({([{<{<[]<>><<>[]>}>[[<[]{}>{()()}]<<(){}>>]}{[{((){})(<>())}<([][])}]}])[({<<{{}[]}>><{{<>()}
  (<<<<<<[{{{[[{{}<>}(<>)](<[][]>({}()))]}<<[(<>[])(<>[])]({<>[]}<<>{}>)>{{{[]<>}({}<>>}([<><>]{<>[]})}>}
  {[({<{{[({[[{[{}[]]{{}}}]({<{}>{()}}(({}{})({}[])))]{({{[]<>}{()[]}}<[{}<>][[]()]>)[{((){})(<><>)
  {{<{{{[({(<{{{{}[]}{[]()}}((<>[])([]<>))}[{{<>{}}([]{})}{[[]<>]<[]<>>}]><{{(<>)}({[]}[()<>])}{<[[]
  ((<{{{{(([(<{{{}()}{<><>}}>)]{([{<<>[]>{<><>}}<[[][]]<()[]>>])({({[][]}<[][]>)[[[]{}]{[]<>}]})}))({{[
  <<{<([{[{[<<<[()()]>[(<><>)[()<>]]>({[{}]<{}>}<{{}()}<[]{}>>)>][<[{<{}}}{[()<>]{<>()}}]([([][]){
  (({<([[[({{(({[]<>}[()[]])[({}{})<()<>>))<(([][])<<>[]>){<[]<>>}>}(([<<><>>[{}<>]]{<[]()>{<><>}})([<<><>>(`