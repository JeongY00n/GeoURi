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
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class KidsResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long kidsResponseKey;
    private Long resKey ;
    private Long reqKey;
    private int reaction;
    private int resType;
}
