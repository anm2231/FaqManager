//
//package com.example.BackendApplication;
//
//import io.jsonwebtoken.*;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.stereotype.Component;
//
//import java.security.Key;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//@Component
//public class JwtUtil {
//
//    // Use secure key (for demo, hardcoded)
//    private final String SECRET =  "MY_SUPER_SECRET_KEY_FOR_JWT123456";
//    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());
//
//    // Valid for 10 hours
//    private long EXPIRATION_TIME = 1000 * 60 * 60 * 10;
//
//    // Create token with username and role
//    public String generateToken(String username) {
//        User user = userRepository.findByUsername(username);
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("role", user.getRole()); // ✅ this must be added
//        return Jwts.builder()
//                .setClaims(claims)
//                .setSubject(username)
//                .signWith(secretKey)
//                .compact();
//    }
//
//
//    // Extract username from token
//    public String extractUsername(String token) {
//        return parseClaims(token).getSubject();
//    }
//
//    // Extract role from token
//    public String extractRole(String token) {
//        return (String) parseClaims(token).get("role");
//    }
//
//    // Check if token is valid
//    public boolean validateToken(String token) {
//        try {
//            parseClaims(token);
//            return true;
//        } catch (JwtException e) {
//            return false;
//        }
//    }
//
//    // Parse token and return claims
//    private Claims parseClaims(String token) {
//        return Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(token)
//                .getBody();
//    }
//}

package com.example.BackendApplication;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    private final String SECRET = "MY_SUPER_SECRET_KEY_FOR_JWT123456";
    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 10; // 10 hours

    @Autowired
    private UserRepo userRepository;

    public String generateToken(String username) {
        User user = userRepository.findByUsername(username);
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getRole().toUpperCase());  // role in JWT payload

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key) //  use the correct `key`
                .compact();

    }

    public String extractUsername(String token) {
        return parseClaims(token).getSubject();
    }

    public String extractRole(String token) {
        return (String) parseClaims(token).get("role");
    }

    public boolean validateToken(String token) {
        try {
            parseClaims(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    private Claims parseClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
