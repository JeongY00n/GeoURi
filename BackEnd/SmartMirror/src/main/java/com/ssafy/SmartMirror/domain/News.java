package com.ssafy.SmartMirror.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class News { // 시간별 랭킹 뉴스
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long newsKey;
    private String press;
    private String title;

}
