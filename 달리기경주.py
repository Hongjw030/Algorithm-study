# 프로그래머스 Lv.1 문제
# for 문을 통해 callings에서 원소를 하나씩 가져오고,
# 해당 원소를 players에서 찾아 앞의 원소와 위치를 바꾸어준다.
# 따라서 이중 for 문을 사용해야 하며,
# players는 5만개 이하, callings는 100만개 이하이므로
# O(N^2) 시간복잡도 최악의 경우

def solution(players, callings):
    for name in callings:
        players[callings.index(name)], players[callings.index(name)-1] = players[callings.index(name)-1], players[callings.index(name)]
    answer = players
    return answer

a = [1,2,3,4,5,6]
print(a.index[1])